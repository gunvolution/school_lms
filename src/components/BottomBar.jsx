export default function BottomBar({ savedAt, onReset, onSave }) {
  return (
    <div className="fixed bottom-0 right-0 left-0 md:left-64 bg-surface-container-lowest/95 backdrop-blur-md border-t border-outline-variant px-4 md:px-6 py-3.5 z-20 shadow-lg">
      <div className="max-w-[1440px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2.5 text-[12px] text-on-surface-variant">
          <span className="material-symbols-outlined text-[18px] text-emerald-600">cloud_done</span>
          <span>Tersimpan otomatis sebagai draf • <strong className="text-on-surface">Terakhir disimpan {savedAt}</strong></span>
        </div>
        <div className="flex items-center gap-2.5 flex-wrap justify-center">
          <button onClick={onReset} className="px-3.5 py-2 rounded-lg border border-outline-variant text-on-surface hover:bg-surface-container-low text-[13px] font-semibold">Reset</button>
          <button className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-surface-container-high text-primary text-[13px] font-semibold"><span className="material-symbols-outlined text-[18px]">send_to_mobile</span><span>Finalisasi &amp; Kirim Notifikasi</span></button>
          <button onClick={onSave} className="inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-primary-container text-white hover:bg-blue-800 text-[13px] font-semibold"><span className="material-symbols-outlined text-[18px]">check</span><span>Simpan Absensi</span></button>
        </div>
      </div>
    </div>
  );
}
