import React from 'react';
import './css/HomeMain.css';

const HomeMain = () => {
  return (
    <div>
      <div className="main-half">
        <img className="main-img" src="/img/main.png" alt="" />
        <div className='main-Box-Total'>
          <div className='main-Box-Top'>
            <div className='user-Box'>
              <img className='user-Img' src='/img/user.png'></img>
              <p className='user-Name'>수비스보쌈</p>
            </div>
            <div className='weather-and-bell-Box'>
              <div className='weather-Box'>
                <img className='weather-Sun' src='/img/sun.png'></img>
                <p className='weather-Temper'>28°</p>
                <div className='weather-Detail-Box'>
                  <p className='weather-Location'>대촌동</p>
                  <p className='weather-window'>바람 1m/s  습도 37%</p>
                </div>
              </div>
              <img className='bell' src='/img/bell.png'></img>
            </div>
          </div>
          <div>
          </div>
          <div className='main-Box-Body'>
            <div className='video-Box-Total'>
              <div className='video-Box'>
                <div className='video-Box-Title'>
                  <p className='video-Title'>수비드 기계 촬영 영상</p>
                </div>
                <div className='video-Box-Sousvide'>
                  <video src='/' controls className='video-Sousvide'></video>
                </div>
              </div>
              <div className='thermographic-Box'>
                <div className='thermographic-Box-Title'>
                  <p className='thermographic-Title'>열화상 촬영 이미지</p>
                </div>
                <div className='thermographic-Box-Sousvide'>
                  <div className='thermographic-camera-Box'>
                    <img src='/img/thermographic-camera-image.jpg' className='thermographic-camera-Img'></img>
                  </div>
                  <div className='temperature-control-Box'>

                  </div>
                  <div className='unbalance-alarm-Box'>
                    <div></div>
                    <div></div>
                  </div>
                </div>
              </div>
            </div>
            <div className='distribution-Box-Total'>
              <div className='temperature-Box'>
                <div className='temperature-Box-Title'>
                  <p className='temperature-Title'>온도 분포 현황</p>
                </div>
                <div className='temperature-Graph-Box'>
                  <div className='temperature-Graph'></div>
                </div>
              </div>
              <div className='heat-Box'>
                <div className='heat-Box-Title'>
                  <p className='heat-Title'>열 분포 현황</p>
                </div>
                <div className='heat-Graph-Box'>
                  <div className='heat-Graph'></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeMain;
