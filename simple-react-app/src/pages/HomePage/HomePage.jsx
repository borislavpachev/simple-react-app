import { AppLayout } from '@/components/layout';
import { Hero, Posts } from './components';

export default function HomePage() {
  return (
    <AppLayout>
      <div className="flex flex-col w-full gap-20">
        <Hero />
        <Posts />
      </div>
    </AppLayout>
  );
}
