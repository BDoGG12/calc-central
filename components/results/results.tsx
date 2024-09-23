import { Row } from "react-bootstrap"

const Results: React.FC = () => {

    return (
        <div>
            <h3>Here are your results:</h3>
            <Row>
                <span>Mean: </span>
                <span>Median: </span>
                <span>Mode: </span>
            </Row>
        </div>
    );
};

export default Results;