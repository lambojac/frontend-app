import Card from './components/Card';

interface CardData {
  title: string;
  description: string;
  icon: string;
}

export default function Home() {
  const cardsData: CardData[] = [
    {
      title: "Web Development",
      description: "Build modern, responsive websites using the latest technologies and best practices.",
      icon: "💻"
    },
    {
      title: "Mobile Apps",
      description: "Create stunning mobile applications for iOS and Android platforms.",
      icon: "📱"
    },
    {
      title: "UI/UX Design",
      description: "Design beautiful and intuitive user interfaces that provide great user experiences.",
      icon: "🎨"
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Our Services
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cardsData.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              description={card.description}
              icon={card.icon}
            />
          ))}
        </div>
      </div>
    </main>
  );
}