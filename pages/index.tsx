import axios from "axios"
import NoResults from "../components/NoResults"
import VideoCard from "../components/VideoCard"
import { Video } from '../types'

interface IProps {
  videos: Video[]
}

export default function Home({ videos } : IProps) {
  console.log(videos)
  return (
    <div>
      {videos.length ? (
        videos.map((video: Video) => (
          <VideoCard post={video} key={video._id} />
        ))
      ) : (
        <NoResults text={'No Videos'} />
      )}
    </div>
  )
}

export const getServerSideProps = async () => {
  const { data } = await axios.get('http://localhost:3000/api/post');
  console.log(data)

  return {
    props: {
      videos: data
    }
  }
}



