type Props = {
  params: {
    id: string;
  };
};

export default function VideoPage({ params }: Props) {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <h1 className="text-2xl font-semibold">
        Video ID: {params.id}
      </h1>
    </main>
  );
}