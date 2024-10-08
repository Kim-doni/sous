import React from 'react';
import './css/HomeMain.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquare, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

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
                  <video controls className='video-Sousvide'>
                    <source src="/videos/Preview.mp4" type="video/mp4"/>
                  </video>
                  {/* <video src='/' controls className='video-Sousvide'></video> */}
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
                    <div className='temperature-control-Box-Title'>
                      <p className='temperature-control-Title1'>수비드 기계</p>
                      <p className='temperature-control-Title2'>온도 제어</p>
                    </div>
                    <div className='temperature-control-Box-Total'>
                      <div className='temperature-control-Box-Num'>
                        <div>
                          <div className='temperature-Box-Num'>
                            <p className='temperature-Num'>120</p>
                            <p className='temperature-Sign'>°C</p>
                          </div>
                          <div className='temperature-Box-Img'>
                            <img src='/img/temperature.png' className='temper-Img'></img>
                          </div>
                        </div>
                      </div>
                      <div className='temperature-Box-Control'>
                        <button className='temperature-control-Btn'><FontAwesomeIcon icon={faPlus} className='faPlus' /></button>
                        <button className='temperature-control-Btn'><FontAwesomeIcon icon={faSquare} className='faSquare' /></button>
                        <button className='temperature-control-Btn'><FontAwesomeIcon icon={faMinus} className='faMinus' /></button>
                      </div>
                    </div>
                  </div>
                  <div className='unbalance-alarm-Box'>
                    <div className='unbalance-alarm-Box-Title'>
                      <img src='/img/alarm.png' className='alarm-Img'></img>
                      <p className='unbalance-Text1'>온도 불균형 감지</p>
                      <p className='unbalance-Text2'>정상 범위를 벗어났습니다</p>
                    </div>
                    <div className='today-Box-Total'>
                      <div className='calendar-Box'>
                        <img src='/img/today-calendar.png' className='today-Img'></img>
                      </div>
                      <div className='lowest-Box'>
                        <div className='lowest-temperature-Box-Img'>
                          <div className='lowest-temperature-Box-Num'>
                            <p className='lowest-temperature-Num'>80</p>
                            <p className='lowest-temperature-Sign'>°C</p>
                          </div>
                          <img src='/img/lowest-temperature.png' className='lowest-temper-Img'></img>
                          <p className='lowest-temperature-Text'>최저</p>
                        </div>
                      </div>
                      <div className='average-Box'>
                        <div className='average-Box-Total'>
                          <div>
                            <div className='average-Box-Btn'>
                              <div className='average-Box-Num'>
                                <p className='average-Num'>120</p>
                                <p className='average-Sign'>°C</p>
                              </div>
                            </div>
                            <p className='average-Text'>평균</p>
                          </div>
                        </div>
                      </div>
                      <div className='maximum-Box'>
                        <div className='maximum-temperature-Box-Img'>
                          <div className='maximum-temperature-Box-Num'>
                            <p className='maximum-temperature-Num'>160</p>
                            <p className='maximum-temperature-Sign'>°C</p>
                          </div>
                          <img src='/img/temperature.png' className='maximum-temper-Img'></img>
                          <p className='maximum-temperature-Text'>최대</p>
                        </div>
                      </div>
                    </div>
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
                  <div className='heat-Graph'>
                    <img src='/img/heat-distribution-status.png'></img>
                  </div>
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
