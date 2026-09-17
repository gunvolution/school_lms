const TABS = [
  { id: 'harian', icon: 'fact_check', label: 'Input Presensi Harian' },
  { id: 'bulanan', icon: 'calendar_view_month', label: 'Rekap Bulanan' },
  { id: 'semester', icon: 'assessment', label: 'Rekap Semester' },
];

export default function FilterBar({ tab, setTab, query, setQuery }) {
  return (
    <div className="bg-surface-container-lowest rounded-xl border border-outline-variant shadow-sm p-4 space-y-4">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-surface-container-high pb-4">
        <div className="flex items-center gap-1 bg-surface-container-low p-1 rounded-lg border border-surface-container-highest overflow-x-auto">
          {TABS.map((t) => (
            <button key={t.id} onClick={() => setTab(t.id)}
              className={tab === t.id
                ? 'px-4 py-1.5 rounded-md bg-surface-container-lowest text-primary shadow-xs border border-outline-variant/60 flex items-center gap-1.5 whitespace-nowrap'
                : 'px-4 py-1.5 rounded-md text-on-surface-variant hover:text-on-surface hover:bg-surface-container-lowest/50 flex items-center gap-1.5 whitespace-nowrap'}>
              <span className="material-symbols-outlined text-[16px]">{t.icon}</span>
              <span className="text-[14px] font-semibold">{t.label}</span>
            </button>
          ))}
        </div>
        <div className="relative w-full lg:w-72">
          <span className="material-symbols-outlined absolute left-3 top-2.5 text-outline text-[18px]">search</span>
          <input value={query} onChange={(e) => setQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-1.5 bg-surface-container-lowest border border-outline-variant rounded-lg text-[12px] text-on-surface placeholder:text-outline focus:border-secondary focus:ring-1 focus:ring-secondary outline-none"
            placeholder="Cari nama siswa atau NISN..." />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        <div>
          <label className="block text-[11px] font-semibold text-on-surface-variant mb-1">Pilih Kelas</label>
          <div className="relative">
            <select className="w-full h-10 pl-3 pr-8 bg-surface-container-lowest border border-outline-variant rounded-lg text-[14px] text-on-surface focus:border-secondary appearance-none cursor-pointer">
              <option>Kelas VIII A (32 Siswa)</option>
              <option>Kelas VIII B (32 Siswa)</option>
              <option>Kelas VII A (30 Siswa)</option>
              <option>Kelas IX C (31 Siswa)</option>
            </select>
            <span className="material-symbols-outlined absolute right-2.5 top-2.5 text-outline pointer-events-none text-[20px]">expand_more</span>
          </div>
        </div>
        <div>
          <label className="block text-[11px] font-semibold text-on-surface-variant mb-1">Mata Pelajaran</label>
          <div className="relative">
            <select className="w-full h-10 pl-3 pr-8 bg-surface-container-lowest border border-outline-variant rounded-lg text-[14px] text-on-surface focus:border-secondary appearance-none cursor-pointer">
              <option>Matematika Wajib</option>
              <option>Matematika Peminatan</option>
              <option>Ekstrakurikuler Robotika</option>
            </select>
            <span className="material-symbols-outlined absolute right-2.5 top-2.5 text-outline pointer-events-none text-[20px]">expand_more</span>
          </div>
        </div>
        <div>
          <label className="block text-[11px] font-semibold text-on-surface-variant mb-1">Tanggal Presensi</label>
          <div className="relative flex items-center">
            <input readOnly value="Senin, 14 Oktober 2024" className="w-full h-10 pl-9 pr-3 bg-surface-container-lowest border border-outline-variant rounded-lg text-[14px] text-on-surface cursor-pointer" />
            <span className="material-symbols-outlined absolute left-2.5 text-secondary text-[20px]">event</span>
          </div>
        </div>
        <div>
          <label className="block text-[11px] font-semibold text-on-surface-variant mb-1">Jam &amp; Sesi Mengajar</label>
          <div className="relative">
            <select className="w-full h-10 pl-9 pr-8 bg-surface-container-lowest border border-outline-variant rounded-lg text-[14px] text-on-surface focus:border-secondary appearance-none cursor-pointer">
              <option>Sesi 1 (07:30 - 09:00 WIB)</option>
              <option>Sesi 2 (09:15 - 10:45 WIB)</option>
              <option>Sesi 3 (11:00 - 12:30 WIB)</option>
            </select>
            <span className="material-symbols-outlined absolute left-2.5 top-2.5 text-secondary text-[20px]">schedule</span>
            <span className="material-symbols-outlined absolute right-2.5 top-2.5 text-outline pointer-events-none text-[20px]">expand_more</span>
          </div>
        </div>
      </div>
    </div>
  );
}
