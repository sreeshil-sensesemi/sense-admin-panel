import React from 'react'

function InfoBox({text, count, Icon}) {
    return (
        <section className='top_section' style={{ }}>
            <div className='box_container' style={{ display: 'flex', alignItems: 'center', gap: '5px', justifyContent: 'center', width: '200px', height: '100px', background: '', borderRadius: '10px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }}>
                <div><Icon size={28} color='#00A8CA'/></div>
                <div style={{backgroundColor: '', textAlign: 'center'}}>
                    <h6>Total {text}</h6>
                    <h4 style={{color: '#00A8CA'}}>{count}</h4>
                </div>
            </div>
        </section>
    )
}

export default InfoBox