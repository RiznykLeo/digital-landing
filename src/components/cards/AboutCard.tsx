import React from 'react';

interface AboutCardProps {
    header: string
    img: string
    border: boolean
}

function AboutCard(props: AboutCardProps) {

    const styles: string[] = [
        'px-4 ',
    ]
    if (props.border) {
        styles.push('border-l-2 border-cyan-300')
        console.log(styles.join(''))
    }
    return (
        <div className='w-1/4 text-white'>
            <img className='w-full h-1/3 mb-4 object-cover' src={props.img} alt="about image"/>
            <div className={styles.join('')}>
                <h3 className='text-2xl font-bold mb-4'>
                    {props.header}
                </h3>
                <p>
                    Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit. In,
                    sint, veniam. Architecto consequuntur dignissimos facilis
                    non porro, sit soluta veritatis!
                </p>
            </div>
        </div>
    );
}

export default AboutCard;
