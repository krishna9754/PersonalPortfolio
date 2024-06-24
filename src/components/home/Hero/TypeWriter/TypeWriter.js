import React from 'react'
import { Typewriter } from 'react-simple-typewriter'


function TypeWriter() {
    return (
        <div>
            <h1 style={{ margin: 'auto 0', fontWeight: 'normal' }}>
                {' '}
                <span style={{ color: 'white', marginLeft: '8px', fontWeight: 'bold' }}>
                    <Typewriter
                        words={['Web Developer', 'Android Developer']}
                        loop={true}
                        cursor
                        cursorStyle='|'
                        typeSpeed={60}
                        deleteSpeed={80}
                        delaySpeed={3000}
                    />
                </span>
            </h1>
        </div>
    )
}

export default TypeWriter