import styles from "./MainComponent.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function MainComponent() {
    return(
            <Container fluid className={styles.background}>
                <Row className={styles.mainContainer}>
                    <Col md = {9} xs = {12} className={styles.leftMainContainer}>
                        <div>
                            Game stats display container
                        </div>
                    </Col>
                    <Col md = {3} xs = {12} className={styles.rightMainContainer}>
                        <div>
                            Trading history container
                        </div>
                    </Col>
                </Row>

            </Container>
    )
}

export default MainComponent;