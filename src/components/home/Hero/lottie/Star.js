import React, { useEffect, useRef } from 'react'
import lottie from 'lottie-web'
import star from './star.json'

function StarSpace() {
    const container = useRef(null)

    useEffect(() => {
        const animation = lottie.loadAnimation({
            container: container.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: star,
        })

        return () => animation.destroy() // Clean up animation on unmount
    }, [])

    return (
        <div className='container' ref={container}></div>
    )
}

export default StarSpace
