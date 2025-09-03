import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Table, Row, Col } from 'react-bootstrap';

const tableItems = [
  { src: "", name: "Carrot", price: "10", description: "An apple a day keeps the doctor away." },
  { src: "", name: "Blueberry", price: "20", description: "An apple a day keeps the doctor away." },
  { src: "", name: "Orange Tulip", price: "30", description: "An apple a day keeps the doctor away." },
  { src: "", name: "Dafodil", price: "40", description: "An apple a day keeps the doctor away." }

];

function App() {
  return (
    <Container className='mx-4' style={{ marginTop: "100px" }}>
      <Row className='d-flex justify-content-center align-items-center'>
        <Col xs="auto">
          <div className="logo">
            <img
              src="https://dl.dropbox.com/scl/fi/6n992angwxolaospc9ff7/gaglogo.jpeg?rlkey=88kfmh7xnjnrwluiybi65f12m&st=9cpwlhva&dl=0"
              alt="Logo"
            />
          </div>
        </Col>
      </Row>

      <Row style={{ marginTop: "100px" }}>
        <Col>
          <Table responsive bordered striped hover variant='dark'>
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {tableItems.map(item => (
                <tr key={item.name}>
                  <td><img src={item.src} alt={item.name} width="50" /></td>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>{item.description}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
}

export default App;