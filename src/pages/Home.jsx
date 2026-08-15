import { Link } from 'react-router'
import '../styles/Home.css'

function Home() {
  return (
    <main className="home">
      <section className="hero">
        <div className="hero-content">

          <p className="hero-label">
            AI-Powered Traffic Accident Analysis
          </p>

          <h1 className="hero-title">
            Traffic Accident
            <br />
            Fault Analysis AI
          </h1>

          <p className="hero-description">
            교통사고 영상과 이미지로부터 도로 구조와 차량의 움직임을 분석하고,
            사고 상황 이해와 과실비율 판단까지 연결하는 AI 시스템입니다.
          </p>

          <div className="hero-buttons">

            <Link
              to="/demo"
              className="hero-button hero-button-primary"
            >
              AI DEMO
            </Link>

            <Link
              to="/project"
              className="hero-button hero-button-secondary"
            >
              PROJECT 보기
            </Link>

          </div>

        </div>
      </section>

      <section className="pipeline-section">
        <div className="pipeline-container">

          <div className="pipeline-header">
            <p className="pipeline-label">HOW IT WORKS</p>

            <h2>
              From Accident Scene to Fault Prediction
            </h2>

            <p>
              사고 장면 인식부터 상황 이해, 법적 근거 검색,
              최종 과실비율 판단까지 하나의 파이프라인으로 연결합니다.
            </p>
          </div>

          <div className="pipeline-grid">

            <div className="pipeline-card">
              <span>01</span>
              <h3>Scene Perception</h3>
              <p>
                Encoder · Segmentation · Vector · Geometry
              </p>
            </div>

            <div className="pipeline-card">
              <span>02</span>
              <h3>Situation Understanding</h3>
              <p>
                차량 행동과 객체 간 관계 및 사고 상황 분석
              </p>
            </div>

            <div className="pipeline-card">
              <span>03</span>
              <h3>Legal Retrieval</h3>
              <p>
                관련 법규 · 판례 · 과실비율 인정기준 검색
              </p>
            </div>

            <div className="pipeline-card">
              <span>04</span>
              <h3>Fault Prediction</h3>
              <p>
                과실비율 예측과 판단 근거 생성
              </p>
            </div>

          </div>

        </div>
      </section>

      <section className="development-section">
  <div className="development-container">

    <div className="development-header">
      <p className="development-label">CURRENT DEVELOPMENT</p>

      <h2>Model A</h2>

      <p>
        사고 장면으로부터 도로 구조와 객체의 공간 정보를 추출하는
        Scene Perception 모델을 개발하고 있습니다.
      </p>
    </div>

    <div className="development-content">

      <div className="model-architecture">

        <div className="architecture-box architecture-main">
          <span>INPUT</span>
          <h3>Shared Encoder</h3>
        </div>

        <div className="architecture-branches">

          <div className="architecture-box">
            <span>TASK HEAD</span>
            <h3>Segmentation</h3>
            <p>도로 · 차선 · 정지선 등</p>
          </div>

          <div className="architecture-box">
            <span>TASK HEAD</span>
            <h3>Vector</h3>
            <p>방향 · 위치 · 구조 정보</p>
          </div>

        </div>

        <div className="architecture-box architecture-main">
          <span>OUTPUT</span>
          <h3>Geometry Builder</h3>
        </div>

      </div>

      <div className="development-status">

        <div className="status-item">
          <span>Encoder</span>
          <strong>IN PROGRESS</strong>
        </div>

        <div className="status-item">
          <span>Segmentation</span>
          <strong>IN PROGRESS</strong>
        </div>

        <div className="status-item">
          <span>Vector</span>
          <strong>IN PROGRESS</strong>
        </div>

        <div className="status-item">
          <span>Geometry Builder</span>
          <strong>PLANNED</strong>
        </div>

      </div>

    </div>

  </div>
</section>

    </main>
  )
}

export default Home