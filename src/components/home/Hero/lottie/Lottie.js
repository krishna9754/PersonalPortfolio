import React, { useEffect, useRef } from 'react'
import lottie from 'lottie-web'
import astronaut from './Lottie.json'

function Lottie() {
    const container = useRef(null)

    useEffect(() => {
        const animation = lottie.loadAnimation({
            container: container.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: astronaut,
        })

        return () => animation.destroy() // Clean up animation on unmount
    }, [])

    return (
        <div className='container' ref={container}></div>
    )
}

export default Lottie
