export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="flex bg-slate-700 h-20 px-10 md:px-20 items-center justify-center">
      <p className="text-lg">{`Copyright © ${year} Simple App. All rights reserved.`}</p>
    </footer>
  );
}
