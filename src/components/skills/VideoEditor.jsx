import React from 'react';
import './skills.css';

const VideoEditor = () => {
  return (
    <div className="skills__content">
        <h3 className="skills__title">Video Editor / Design</h3>

        <div className="skills__box">
            <div className="skills__group">
                <div className="skills__data">
                    <i class="bx bx-badge-check"></i>

                    <div>
                        <h3 className="skills__name">After Effect</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>

                <div className="skills__data">
                    <i class="bx bx-badge-check"></i>

                    <div>
                        <h3 className="skills__name">Premiere Pro</h3>
                        <span className="skills__level">Advanced</span>
                    </div>
                </div>

                <div className="skills__data">
                    <i class="bx bx-badge-check"></i>

                    <div>
                        <h3 className="skills__name">Photoshop</h3>
                        <span className="skills__level">Basic</span>
                    </div>
                </div>
            </div>

            <div className="skills__group">
                <div className="skills__data">
                    <i class="bx bx-badge-check"></i>

                    <div>
                        <h3 className="skills__name">Figma</h3>
                        <span className="skills__level">Basic</span>
                    </div>
                </div>

                <div className="skills__data">
                    <i class="bx bx-badge-check"></i>

                    <div>
                        <h3 className="skills__name">Canva</h3>
                        <span className="skills__level">Basic</span>
                    </div>
                </div>

                <div className="skills__data">
                    <i class="bx bx-badge-check"></i>

                    <div>
                        <h3 className="skills__name">Ilustrator</h3>
                        <span className="skills__level">Basic</span>
                    </div>
                </div>
            </div>
        </div>
    </div>    
  )
}

export default VideoEditor
