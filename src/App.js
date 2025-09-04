import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Table, Row, Col } from 'react-bootstrap';

const tableItems = [
  { src: "https://dl.dropbox.com/scl/fi/58i4cmh097k9nk03djayy/CarrotProduce.png?rlkey=gaagyb0drm5e6m5z8tdyaoy6f&st=absx0ppm&dl=0", name: "Carrot", price: "10", description: "A crunchy orange root vegetable rich in vitamin A and good for eyesight." },
  { src: "https://dl.dropbox.com/scl/fi/znctltmgziybr5nmci9uj/Strawberry.png?rlkey=cjmz2kjl5j4leq85fhedu96m1&st=ja4rlf7q&dl=0", name: "Strawberry", price: "50", description: "A sweet, red fuit with tiny seeds on the outside, loved for it's juicy flavor." },
  { src: "https://dl.dropbox.com/scl/fi/3aas0jac28fwcsyh6ia6b/Blueberry.png?rlkey=w8kw0oxtthvuxu648xr994ums&st=p35ec1pg&dl=0", name: "Blueberry", price: "400", description: "A small, round blue fruit packed eith antioxidants and mildly sweet taste." },
  { src: "https://dl.dropbox.com/scl/fi/oqxvgyfawaviiydan4si6/Orangetulip.png?rlkey=2yasno3tinyvabpr1lwxj8oc4&st=0jydurbw&dl=0", name: "Orange Tulip", price: "600", description: "A bright, cheerful flower symbolizing happiness and warmth." },
  { src: "https://dl.dropbox.com/scl/fi/tlt43mr0bgg3fop5fis89/Tomato.png?rlkey=1kxeau58hayl11fnmmowqkkhs&st=vnw84lu1&dl=0", name: "Tomato", price: "800", description: "A juicy red fruit often used as a vegetable, perfect for sauces and salads." }

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
                  <td>¢{item.price}</td>
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