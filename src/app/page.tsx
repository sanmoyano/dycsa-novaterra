import HeroSection from '@/sections/S00H'
import SectionsLayout from '@/components/common/sectionsLayout'
import SectionUno from '@/sections/S01'
import SectionDos from '@/sections/S02'
import SectionTres from '@/sections/S03'
import SectionCuatro from '@/sections/S04'
import SectionCinco from '@/sections/S05'

export default function Home () {
  return (
    <main className='scroll-smooth'>
      <HeroSection />
      <SectionsLayout>
        <SectionUno />
        <SectionDos />
        <SectionTres />
        <SectionCuatro />
        <SectionCinco />
      </SectionsLayout>
    </main>
  )
}
