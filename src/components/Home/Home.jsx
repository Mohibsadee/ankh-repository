import Masonry from '../Masonry/Masonry'
import Footer from '../Footer/Footer'
import Banner from '../Banner/Banner'
import Navbar from '../Navbar/Navbar'
import Board from '../Board/Board'


const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className='mx-auto max-w-[1000px]   '>
        <Banner></Banner>
        <div>
          <Board></Board>
        </div>


        <Masonry />
      </div>
      <div className='text-center font-hirakaku p- 4'>
        <h2>めん徳　二代目つじ田　新橋店 1月24日にオープンしたばかりのラーメン店 にオープンしたばかりのラーメ にオープンしたばかりのラーメ</h2>

      </div>

      <Footer></Footer>
    </div>
  )
}

export default Home
