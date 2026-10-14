import React from 'react'
import SpecularButton from './SpecularButton';
function Button({ title,onClick }) {
    return (
        <div onClick={onClick}>


            <SpecularButton
                size="lg"
                radius={18}
                tint="#ffffff"
                tintOpacity={0}
                blur={0}
                textColor="#EAB308"
                lineColor="#ffffff"
                baseColor="#EAB308"
                intensity={1}
                shineSize={10}
                shineFade={40}
                thickness={1}
                speed={0.35}
                followMouse
                proximity={250}
                autoAnimate={false}
                onClick={() => console.log('clicked')}
            >
                {title}
            </SpecularButton>
        </div>
    )
}

export default Button
