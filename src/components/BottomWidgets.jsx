import { WEEK_TREND } from '../data/meta';

export default function BottomWidgets({ note, setNote }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      <div className="lg:col-span-5 bg-surface-container-lowest rounded-xl border border-outline-variant shadow-sm p-5 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between mb-1">
            <h3 className="text-[14px] font-bold text-on-surface">Tren Kehadiran Kelas VIII A Pekan Ini</h3>
            <span className="text-[11px] text-secondary bg-surface-container-low px-2 py-0.5 rounded">Pekan 7</span>
          </div>
          <p className="text-[12px] text-outline mb-4">Grafik komparasi harian (Senin - Jumat)</p>
          <div className="space-y-3">
            {WEEK_TREND.map((w) => (
              <div key={w.hari}>
                <div className="flex justify-between text-[11px] mb-1">
                  <span className={w.today ? 'font-bold text-on-surface' : 'text-on-surface-variant font-medium'}>{w.hari}</span>
                  <span className={w.today ? 'text-emerald-700 font-bold' : 'text-on-surface-variant font-semibold'}>{w.label}</span>
                </div>
                <div className="w-full bg-surface-container-highest h-2.5 rounded-full overflow-hidden">
                  <div className={`${w.today ? 'bg-emerald-600' : 'bg-secondary'} h-full rounded-full`} style={{ width: `${w.persen}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-4 pt-3 border-t border-surface-container-high flex items-center justify-between text-[11px] text-outline">
          <span>Rata-rata Pekan Lalu: <strong className="text-on-surface">94.9%</strong></span>
          <a href="#" onClick={(e) => e.preventDefault()} className="text-secondary font-semibold hover:underline">Lihat Detail Grafik →</a>
        </div>
      </div>
      <div className="lg:col-span-7 bg-surface-container-lowest rounded-xl border border-outline-variant shadow-sm p-5 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary text-[20px]">edit_note</span>
              <h3 className="text-[14px] font-bold text-on-surface">Catatan Guru &amp; Kejadian Khusus Sesi Ini</h3>
            </div>
            <span className="text-[11px] text-outline">Tersimpan ke Jurnal Mengajar</span>
          </div>
          <p className="text-[12px] text-on-surface-variant mb-3">Evaluasi keterlibatan kelas, disposisi siswa sakit/izin, atau rangkuman materi hari ini.</p>
          <textarea value={note} onChange={(e) => setNote(e.target.value)} rows={4} className="w-full p-3 bg-surface-container-low border border-outline-variant rounded-lg text-[12px] text-on-surface placeholder:text-outline focus:border-secondary focus:ring-1 focus:ring-secondary outline-none resize-none" placeholder="Tulis catatan kelas di sini..." />
        </div>
        <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-[11px]">
          <div className="flex items-center gap-2 text-on-surface-variant">
            <span className="material-symbols-outlined text-[16px] text-emerald-600">check_circle</span>
            <span>Terintegrasi dengan e-Rapor Kurikulum Merdeka</span>
          </div>
          <div className="flex items-center gap-2">
            <button className="px-3 py-1.5 rounded-lg border border-outline-variant text-on-surface-variant hover:bg-surface-container-low">Sisipkan Tag Materi</button>
            <button className="px-3 py-1.5 rounded-lg bg-surface-container-high text-primary font-semibold">Perbarui Jurnal</button>
          </div>
        </div>
      </div>
    </div>
  );
}
