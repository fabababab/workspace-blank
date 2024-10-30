import GeneralSection from '../components/GeneralSection';
import PositionsSection from '../components/PositionsSection';
import EducationSection from '../components/EducationSection';
import BookRecommendationsSection from '../components/BookRecommendationsSection';

export default function Home() {
  return (
    <div>
      <h1>Personal CV</h1>
      <GeneralSection />
      <PositionsSection />
      <EducationSection />
      <BookRecommendationsSection />
    </div>
  );
}
