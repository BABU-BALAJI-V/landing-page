import React from 'react'

const WhatsInside = () => {
  return (
    <section>
        <div className="secleft">
            <h1>Whats Inside</h1><br />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer est tellus, pulvinar ac iaculis vel, varius eu arcu. Integer id lectus posuere nisi dignissim gravida at ac justo. Ut nec dui rutrum, cursus mauris sed, ullamcorper orci.</p><br />
            <p>Morbi egestas ultricies est. Proin eu odio nibh. Praesent venenatis mi vitae pharetra porttitor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec sed dolor pulvinar, dapibus augue non, tincidunt nibh. Curabitur et elit commodo, dictum diam sed, dapibus enim. Integer et pulvinar leo, condimentum maximus diam. Phasellus imperdiet urna in tortor vestibulum porta eget ac metus senectus et netus.</p><br />
        </div>
        <div className="secright">
            <img src={require('./logo1.jpg')} alt="Logo" />
        </div>
    </section>
  )
}

export default WhatsInside