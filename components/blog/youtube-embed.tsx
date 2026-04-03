interface YouTubeEmbedProps {
  id: string;
  title?: string;
}

export function YouTubeEmbed({ id, title = "YouTube video" }: YouTubeEmbedProps) {
  return (
    <div className="relative w-full aspect-video rounded-lg overflow-hidden my-6 bg-muted">
      <iframe
        src={`https://www.youtube.com/embed/${id}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute inset-0 w-full h-full border-0"
        loading="lazy"
      />
    </div>
  );
}
