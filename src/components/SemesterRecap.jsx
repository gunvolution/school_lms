export default function SemesterRecap({ stats }) {
  const pct = Math.round((stats.hadir / stats.total) * 100);
  const rows = [
    { bln: 'Juli 2024', h: 96 }, { bln: 'Agustus 2024', h: 95 },
    { bln: 'September 2024', h: 94 }, { bln: 'Oktober 2024 (berjalan)', h: pct },
  ];
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <div className="bg-surface-container-lowest rounded-xl border border-outline-variant shadow-sm p-5">
        <h3 className="text-[14px] font-bold">Rekap Semester Ganjil 2024/2025</h3>
        <p className="text-[12px] text-outline mb-4">Akumulasi kehadiran Kelas VIII A per bulan</p>
        <div className="space-y-3">
          {rows.map((r) => (
            <div key={r.bln}>
              <div className="flex justify-between text-[11px] font-semibold mb-1"><span>{r.bln}</span><span>{r.h}%</span></div>
              <div className="w-full bg-surface-container-highest h-2.5 rounded-full overflow-hidden"><div className="bg-primary-container h-full rounded-full" style={{ width: `${r.h}%` }}></div></div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-primary-container text-white rounded-xl shadow-sm p-5">
        <h3 className="text-[14px] font-bold">Ringkas untuk Rapor</h3>
        <p className="text-[12px] text-white/80 mb-4">Otomatis masuk ke kolom ketidakhadiran rapor.</p>
        <div className="grid grid-cols-3 gap-3 text-center">
          <div className="bg-white/10 rounded-lg p-3"><div className="text-xl font-bold">{stats.sakit}</div><div className="text-[11px]">Sakit</div></div>
          <div className="bg-white/10 rounded-lg p-3"><div className="text-xl font-bold">{stats.izin}</div><div className="text-[11px]">Izin</div></div>
          <div className="bg-white/10 rounded-lg p-3"><div className="text-xl font-bold">{stats.alpa}</div><div className="text-[11px]">Tanpa Ket.</div></div>
        </div>
        <button className="mt-4 w-full py-2 rounded-lg bg-white text-primary-container text-[13px] font-bold">Sinkron ke e-Rapor</button>
      </div>
    </div>
  );
}
