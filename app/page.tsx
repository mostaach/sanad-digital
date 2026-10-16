import { Hero } from '@/components/sections/Hero';
import { Problem } from '@/components/sections/Problem';
import { Infrastructure } from '@/components/sections/Infrastructure';
import { LiveSystems } from '@/components/sections/LiveSystems';
import { Transformation } from '@/components/sections/Transformation';
import { WhySanad } from '@/components/sections/WhySanad';
import { UseCases } from '@/components/sections/UseCases';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { AuditCta } from '@/components/sections/AuditCta';

export default function Home() {
  return (
    <main id="main-content">
      <Hero />
      <Problem />
      <Infrastructure />
      <LiveSystems />
      <Transformation />
      <WhySanad />
      <UseCases />
      <HowItWorks />
      <AuditCta />
    </main>
  );
}
