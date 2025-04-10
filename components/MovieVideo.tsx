import { API_URL } from "../app/constants";
import styles from "../styles/movieVideo.module.css"

async function getVideos(id: string) {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const response = await fetch(`${API_URL}/${id}/videos`);
  return response.json();
  // throw new Error('something broke...')
}

export default async function MovieVideo({ id }: { id: string }) {
  const videos = await getVideos(id);
  return (
    <div className={styles.container}>
      {videos.map((video) => (
        <iframe
          key={video.id}
          title={video.name}
          src={`https://youtube.com/embed/${video.key}`}
          allowFullScreen
        />
      ))}
    </div>
  );
}
