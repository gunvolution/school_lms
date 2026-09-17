export default function Topbar() {
  return (
    <header className="sticky top-0 h-16 w-full z-20 bg-surface-container-lowest border-b border-outline-variant shadow-sm flex items-center px-4 md:px-6">
      <div className="flex justify-between items-center w-full">
        <div className="flex items-center gap-4 w-1/3">
          <div className="relative w-full max-w-sm">
            <span className="material-symbols-outlined absolute left-3 top-2.5 text-outline text-[18px]">search</span>
            <input className="w-full pl-9 pr-4 py-2 bg-surface-container-lowest border border-outline-variant rounded-lg text-[12px] text-on-surface placeholder:text-outline focus:border-secondary focus:ring-1 focus:ring-secondary outline-none" placeholder="Cari siswa, kelas, jadwal..." />
          </div>
        </div>
        <div className="hidden lg:flex items-center gap-2 px-3 py-1 bg-surface-container-low border border-surface-container-highest rounded-full">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span className="text-[11px] font-semibold text-on-surface-variant">Tahun Ajaran 2024/2025 • Semester Ganjil</span>
        </div>
        <div className="flex items-center gap-3">
          <button className="w-9 h-9 rounded-lg hidden sm:flex items-center justify-center text-on-surface-variant hover:bg-surface-container-low" title="Jadwal Akademik">
            <span className="material-symbols-outlined text-[20px]">calendar_month</span>
          </button>
          <button className="relative w-9 h-9 rounded-lg flex items-center justify-center text-on-surface-variant hover:bg-surface-container-low" title="Pemberitahuan">
            <span className="material-symbols-outlined text-[20px]">notifications</span>
            <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-error ring-2 ring-white"></span>
          </button>
          <div className="h-6 w-[1px] bg-outline-variant mx-1"></div>
          <div className="flex items-center gap-3 pl-1">
            <img alt="Foto Profil Pak Gunawan" className="w-8 h-8 rounded-full object-cover border border-secondary" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkYGyykMnSg5IiEm-Nc3lS5uaU7M4McxP6MxDnofqhDCF358nnXwZoKePyR-G1i4HNiPP8sXcFPgOy_af1L0IgS-6Rg-zT89NVg_8EOXVRP4ToPiuAmPLay9ZnvTWPe58VhhxqHSnta7Bs9duq4QrG7oSKcjrE1KEPdmkI85fOGeA46dWj-BqE9antXK2OOFNcxITbZaiFgaTjOApPLnZKX7E_vZ8EjRo4vrVssN6VUMDkYzYpaQnNXQ" />
            <div className="hidden sm:flex flex-col text-left">
              <span className="text-[14px] font-semibold text-on-surface leading-tight">Pak Gunawan</span>
              <span className="text-[11px] text-outline leading-tight">Wali Kelas VIII A</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
