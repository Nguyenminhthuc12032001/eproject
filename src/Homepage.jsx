
import data from './data.json'

function Homepage({ showDescription }) {

    // Tìm cầu cao nhất
    const highest = data.reduce((a, b) => (a.height > b.height) ? a : b);

    // Tìm cầu dài nhất
    const longest = data.reduce((a, b) => (a.length > b.length) ? a : b);

    // Tìm cầu có cột cao nhất
    const tallest = data.reduce((a, b) => (a.tall > b.tall) ? a : b);

    // Tìm cầu cổ nhất
    const oldest = data.reduce((a, b) => (a.yearCompleted < b.yearCompleted) ? a : b);

    // Mảng chứa 4 cây cầu tính toán được
    const selectedBridges = [
        { ...highest, record: 'Highest' },
        { ...longest, record: 'Longest' },
        { ...tallest, record: 'Tallest' },
        { ...oldest, record: 'Oldest' }
    ];
    return (
        <div className="con">

            <div className="con-img-main">
                <div>
                    <h1 className="title">Icons of Human Ingenuity, Connecting Worlds Beyond Boundaries</h1>
                    <p>Bridges symbolize human innovation and ambition, connecting worlds and uniting people across continents and cultures. From the Brooklyn Bridge's enduring grace to the Millau Viaduct's soaring heights, each bridge tells a story of vision and unity. Explore iconic bridges that shape landscapes and stand as symbols of hope, progress, and human connection.</p>
                </div>
            </div>

            <div id="mostFamous">
                <h2>Outstanding Bridges</h2>
                <hr />
                <div className="row">
                    {
                        selectedBridges.map((item) => (
                            <div className="card col-md-4 col-lg-3 col-xl-3 col-xll-2">

                                <button className="titile-card" onClick={() => showDescription(item)}>
                                    {item.name} <br /> ({item.record})
                                </button>

                                <img className="card-img-bottom" src={`${process.env.PUBLIC_URL}/bridge/bridge.jpg`} />

                            </div>
                        ))
                    }
                </div>
            </div>

        </div>
    );
}

export default Homepage;