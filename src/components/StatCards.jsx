export default function StatCards({ stats }) {
  const pct = (n) => ((n / stats.total) * 100).toFixed(n === 0 ? 0 : 2).replace(/\.00$/, '');
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <div className="bg-surface-container-lowest rounded-xl p-5 border border-outline-variant shadow-sm relative overflow-hidden">
        <div className="absolute top-0 left-0 h-1 w-full bg-emerald-500"></div>
        <div className="flex items-start justify-between">
          <div>
            <span className="text-[13px] text-on-surface-variant font-medium">Tingkat Kehadiran Hari Ini</span>
            <div className="flex items-baseline gap-2 mt-2">
              <span className="text-[28px] leading-9 font-bold text-on-surface">{pct(stats.hadir)}%</span>
              <span className="text-[12px] text-outline">{stats.hadir}/{stats.total} Siswa</span>
            </div>
          </div>
          <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center">
            <span className="material-symbols-outlined text-[22px]">check_circle</span>
          </div>
        </div>
        <div className="mt-4">
          <div className="w-full bg-surface-container-highest h-2 rounded-full overflow-hidden">
            <div className="bg-emerald-600 h-full rounded-full transition-all" style={{ width: `${(stats.hadir / stats.total) * 100}%` }}></div>
          </div>
          <div className="flex justify-between items-center mt-1.5 text-[11px] font-semibold text-emerald-700">
            <span>{stats.hadir / stats.total >= 0.9 ? 'Sangat Baik' : 'Perlu Perhatian'}</span>
            <span>Target: &gt;90%</span>
          </div>
        </div>
      </div>
      <div className="bg-surface-container-lowest rounded-xl p-5 border border-outline-variant shadow-sm relative overflow-hidden">
        <div className="absolute top-0 left-0 h-1 w-full bg-amber-500"></div>
        <div className="flex items-start justify-between">
          <div>
            <span className="text-[13px] text-on-surface-variant font-medium">Sakit</span>
            <div className="flex items-baseline gap-2 mt-2">
              <span className="text-[28px] leading-9 font-bold text-amber-700">{stats.sakit}</span>
              <span className="text-[12px] text-outline">Siswa ({pct(stats.sakit)}%)</span>
            </div>
          </div>
          <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-800 flex items-center justify-center">
            <span className="material-symbols-outlined text-[22px]">medication</span>
          </div>
        </div>
        <div className="mt-4 pt-2 border-t border-surface-container-high flex items-center gap-1.5 text-[11px] font-semibold text-amber-800">
          <span className="material-symbols-outlined text-[16px] text-amber-600">verified</span>
          <span className="truncate">{stats.sakit > 0 ? 'Surat dokter terverifikasi' : 'Nihil siswa sakit'}</span>
        </div>
      </div>
      <div className="bg-surface-container-lowest rounded-xl p-5 border border-outline-variant shadow-sm relative overflow-hidden">
        <div className="absolute top-0 left-0 h-1 w-full bg-secondary"></div>
        <div className="flex items-start justify-between">
          <div>
            <span className="text-[13px] text-on-surface-variant font-medium">Izin</span>
            <div className="flex items-baseline gap-2 mt-2">
              <span className="text-[28px] leading-9 font-bold text-secondary">{stats.izin}</span>
              <span className="text-[12px] text-outline">Siswa ({pct(stats.izin)}%)</span>
            </div>
          </div>
          <div className="w-10 h-10 rounded-lg bg-surface-container-low text-secondary flex items-center justify-center">
            <span className="material-symbols-outlined text-[22px]">mark_email_read</span>
          </div>
        </div>
        <div className="mt-4 pt-2 border-t border-surface-container-high flex items-center gap-1.5 text-[11px] font-semibold text-secondary">
          <span className="material-symbols-outlined text-[16px]">chat</span>
          <span className="truncate">{stats.izin > 0 ? 'Pemberitahuan resmi orang tua' : 'Nihil siswa izin'}</span>
        </div>
      </div>
      <div className="bg-surface-container-lowest rounded-xl p-5 border border-outline-variant shadow-sm relative overflow-hidden">
        <div className="absolute top-0 left-0 h-1 w-full bg-error"></div>
        <div className="flex items-start justify-between">
          <div>
            <span className="text-[13px] text-on-surface-variant font-medium">Alpa / Tanpa Keterangan</span>
            <div className="flex items-baseline gap-2 mt-2">
              <span className={`text-[28px] leading-9 font-bold ${stats.alpa === 0 ? 'text-emerald-600' : 'text-error'}`}>{stats.alpa}</span>
              <span className="text-[12px] text-outline">Siswa ({pct(stats.alpa)}%)</span>
            </div>
          </div>
          <div className="w-10 h-10 rounded-lg bg-rose-50 text-error flex items-center justify-center">
            <span className="material-symbols-outlined text-[22px]">warning</span>
          </div>
        </div>
        <div className={`mt-4 pt-2 border-t border-surface-container-high flex items-center gap-1.5 text-[11px] font-semibold ${stats.alpa === 0 ? 'text-emerald-700' : 'text-error'}`}>
          <span className="material-symbols-outlined text-[16px]">{stats.alpa === 0 ? 'check' : 'warning'}</span>
          <span>{stats.alpa === 0 ? 'Nihil pelanggaran presensi' : `${stats.alpa} siswa perlu ditindaklanjuti`}</span>
        </div>
      </div>
    </div>
  );
}
