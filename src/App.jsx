import { useMemo, useState } from 'react';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import StatCards from './components/StatCards';
import FilterBar from './components/FilterBar';
import AttendanceTable from './components/AttendanceTable';
import BottomWidgets from './components/BottomWidgets';
import BottomBar from './components/BottomBar';
import MonthlyRecap from './components/MonthlyRecap';
import SemesterRecap from './components/SemesterRecap';
import { STUDENTS_SEED } from './data/students';
import { AVATARS } from './data/avatars';
import { EXTRA_NAMES } from './data/meta';

const TIMES = ['07:10 WIB','07:14 WIB','07:08 WIB','07:21 WIB','07:06 WIB','07:17 WIB','07:19 WIB','07:11 WIB','07:23 WIB','07:09 WIB'];

function fullClass() {
  const list = STUDENTS_SEED.map((s) => ({ ...s, avatar: AVATARS[s.id] || `https://ui-avatars.com/api/?name=${encodeURIComponent(s.nama)}&background=e5eeff&color=00288e&bold=true` }));
  EXTRA_NAMES.forEach(([nama, gender], i) => {
    const no = list.length + 1;
    list.push({ id: no, nis: `202408${String(no).padStart(2,'0')}`, noAbsen: String(no).padStart(2,'0'), nama, gender, status: 'H', waktu: `${i % 5 === 0 ? 'Datang Lebih Awal' : 'Tepat Waktu'} (${TIMES[i % TIMES.length]})`, avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(nama)}&background=e5eeff&color=00288e&bold=true` });
  });
  return list;
}

const DEFAULT_NOTE = 'Seluruh siswa mengikuti pembelajaran materi SPLDV (Sistem Persamaan Linear Dua Variabel) metode eliminasi dengan tertib dan aktif. Bayu Pratama izin sakit demam dengan surat dokter terlampir, materi susulan telah dikirimkan via LMS. Dimas Anggara izin keluarga dengan persetujuan.';

export default function App() {
  const [students, setStudents] = useState(fullClass);
  const [tab, setTab] = useState('harian');
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(8);
  const [note, setNote] = useState(DEFAULT_NOTE);
  const [toast, setToast] = useState('');
  const [savedAt, setSavedAt] = useState('07:45 WIB');

  const stats = useMemo(() => ({
    total: students.length,
    hadir: students.filter((s) => s.status === 'H').length,
    sakit: students.filter((s) => s.status === 'S').length,
    izin: students.filter((s) => s.status === 'I').length,
    alpa: students.filter((s) => s.status === 'A').length,
  }), [students]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    const base = q ? students.filter((s) => s.nama.toLowerCase().includes(q) || s.nis.includes(q)) : students;
    return base;
  }, [students, query]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / perPage));
  const safePage = Math.min(page, totalPages);
  const rows = filtered.slice((safePage - 1) * perPage, safePage * perPage);

  const setStatus = (id, v) => setStudents((prev) => prev.map((s) => (s.id === id ? { ...s, status: v, waktu: v === 'H' ? (s.waktu || 'Tepat Waktu (07:20 WIB)') : s.waktu } : s)));
  const markAll = () => { setStudents((prev) => prev.map((s) => ({ ...s, status: 'H', waktu: s.waktu || 'Tepat Waktu (07:20 WIB)' }))); flash('Semua siswa ditandai Hadir'); };
  const resetAll = () => { setStudents(fullClass()); setNote(DEFAULT_NOTE); setPage(1); flash('Absensi di-reset ke kondisi awal'); };
  const save = () => { const now = new Date(); setSavedAt(`${String(now.getHours()).padStart(2,'0')}:${String(now.getMinutes()).padStart(2,'0')} WIB`); flash(`Absensi tersimpan • H:${stats.hadir} S:${stats.sakit} I:${stats.izin} A:${stats.alpa}`); };
  const flash = (msg) => { setToast(msg); setTimeout(() => setToast(''), 2600); };
  return (
    <div className="bg-background text-on-surface min-h-screen flex antialiased">
      <Sidebar />
      <div className="flex-1 ml-0 md:ml-64 flex flex-col min-h-screen bg-background">
        <Topbar />
        <main className="flex-1 p-4 md:p-6 lg:p-8 space-y-6 pb-28 max-w-[1440px] mx-auto w-full">
          <nav className="flex items-center gap-2 text-[12px] text-outline">
            <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-primary">Beranda</a>
            <span className="material-symbols-outlined text-[14px]">chevron_right</span>
            <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-primary">Kesiswaan &amp; Pembelajaran</a>
            <span className="material-symbols-outlined text-[14px]">chevron_right</span>
            <span className="text-on-surface font-semibold">Absensi Siswa</span>
          </nav>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-2 border-b border-surface-container-high">
            <div>
              <h1 className="text-[28px] leading-9 font-bold tracking-tight">Absensi &amp; Rekap Kehadiran Siswa</h1>
              <p className="text-[14px] text-on-surface-variant mt-1">Pencatatan presensi kelas harian cepat dan rekapitulasi kehadiran semester otomatis terhubung ke sistem rapor.</p>
            </div>
            <div className="flex items-center flex-wrap gap-2.5">
              <button onClick={markAll} className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200 hover:bg-emerald-100 text-[13px] font-semibold shadow-sm"><span className="material-symbols-outlined text-[18px]">done_all</span><span>Tandai Semua Hadir</span></button>
              <button onClick={() => flash('Rekap presensi diunduh (CSV)')} className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-surface-container-lowest border border-outline-variant hover:bg-surface-container-low text-[13px] font-semibold shadow-sm"><span className="material-symbols-outlined text-[18px]">download</span><span>Unduh Rekap Presensi</span></button>
              <button onClick={save} className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary-container text-white hover:bg-blue-800 text-[13px] font-semibold shadow-sm"><span className="material-symbols-outlined text-[18px]">save</span><span>Simpan Absensi</span></button>
            </div>
          </div>
          <StatCards stats={stats} />
          <FilterBar tab={tab} setTab={(t) => { setTab(t); setPage(1); }} query={query} setQuery={(v) => { setQuery(v); setPage(1); }} />
          {tab === 'harian' && <AttendanceTable rows={rows} setStatus={setStatus} page={safePage} setPage={setPage} perPage={perPage} setPerPage={setPerPage} total={filtered.length} />}
          {tab === 'bulanan' && <MonthlyRecap students={students} />}
          {tab === 'semester' && <SemesterRecap stats={stats} />}
          <BottomWidgets note={note} setNote={setNote} />
        </main>
        <BottomBar savedAt={savedAt} onReset={resetAll} onSave={save} />
      </div>
      {toast && <div className="fixed bottom-24 left-1/2 -translate-x-1/2 z-50 px-4 py-2.5 rounded-lg bg-on-surface text-white text-[13px] font-semibold shadow-xl flex items-center gap-2"><span className="material-symbols-outlined text-[18px] text-emerald-400">check_circle</span>{toast}</div>}
    </div>
  );
}
