import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const LoadingScreen = () => {

    const items = new Array(8).fill(0)

    return (

        <>
            {items.map((item, index) => (
                <div key={index}>
                    <div>
                        <Skeleton width={250} height={300} />
                    </div>
                    <div>
                        <Skeleton count={4} />
                    </div>
                </div>
            ))}

        </>


    )



}

export default LoadingScreen