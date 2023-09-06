import HeroSection from '@/sections/S00H'
import SectionsLayout from '@/components/common/sectionsLayout'
import SectionUno from '@/sections/S01'
import SectionDos from '@/sections/S02'
import SectionTres from '@/sections/S03'

export default function Home () {
  return (
    <main>
      <HeroSection />
      <SectionsLayout>
        <SectionUno />
        <SectionDos />
        <SectionTres />
      </SectionsLayout>
    </main>
  )
}
