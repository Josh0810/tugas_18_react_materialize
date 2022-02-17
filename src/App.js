import {
  Slider,
  Caption,
  Slide,
  Row,
  Col,
  Card,
  CardTitle,
  SideNav,
  SideNavItem,
  Button,
  Icon,
  Pagination,
} from "react-materialize";

function App() {
  return (
    <div className="App" style={{ paddingLeft: "10px", paddingRight: "10px" }}>
      <style>
        {`
            #root > div > div {
              z-index: 99999 !important;
            }
          `}
      </style>

      <SideNav
        id="SideNav-68"
        options={{
          draggable: true,
        }}
        trigger={
          <Button className="black" node="button">
            <Icon>menu</Icon>
          </Button>
        }
      >
        <SideNavItem
          user={{
            background: "https://i.imgur.com/qacSzJV.png",
            email: "test@gmail.com",
            image:
              "https://i.pinimg.com/originals/90/71/88/90718823e398e86b0260ff47d7187acd.jpg",
            name: "Joshua Oktavianus Suryadi",
          }}
          userView
        />
        <SideNavItem href="#!icon" icon={<Icon>person_outline</Icon>}>
          Profil Saya
        </SideNavItem>
        <SideNavItem href="#hubungi-kami" icon={<Icon>help</Icon>}>
          Hubungi Kami
        </SideNavItem>
        <SideNavItem divider />
        <SideNavItem subheader>Product</SideNavItem>
        <SideNavItem href="#kesehatan" waves>
          Kesehatan
        </SideNavItem>
        <SideNavItem href="#komputer" waves>
          Komputer & Aksesoris
        </SideNavItem>
        <SideNavItem href="#gaming" waves>
          Gaming
        </SideNavItem>
        <SideNavItem href="#kamera" waves>
          Kamera
        </SideNavItem>
        <SideNavItem href="#olahraga" waves>
          Olahraga
        </SideNavItem>
        <SideNavItem href="#fashion-pria" waves>
          Fashion Pria
        </SideNavItem>
        <SideNavItem href="#fashion-wanita" waves>
          Fashion Wanita
        </SideNavItem>
      </SideNav>
      <br />
      <div>
        <Slider
          fullscreen={false}
          options={{
            duration: 500,
            height: 350,
            indicators: true,
            interval: 5000,
          }}
        >
          <Slide
            image={
              <img
                alt=""
                src="https://s-ec.bstatic.com/images/hotel/max1024x768/106/106114417.jpg"
              />
            }
          >
            <Caption placement="center">
              <h3>Pantai</h3>
              <h5 className="light white-text text-lighten-1">
                Dapatkan Kesempatan Jalan-Jalan Ke Pantai Dengan Membeli Sebuah
                Product
              </h5>
            </Caption>
          </Slide>
          <Slide
            image={
              <img alt="" src="https://wallpaperaccess.com/full/3432890.jpg" />
            }
          >
            <Caption placement="left">
              <h3>New York</h3>
              <h5 className="light white-text text-lighten-1">
                Dapatkan Kesempatan Jalan-Jalan Ke New York Dengan Membeli
                Sebuah Product
              </h5>
            </Caption>
          </Slide>
          <Slide
            image={
              <img
                alt=""
                src="https://photos.mandarinoriental.com/is/image/MandarinOriental/paris-2017-home?wid=2880&hei=1280&fmt=jpeg&crop=9,336,2699,1200&anchor=1358,936&qlt=75,0&fit=wrap&op_sharpen=0&resMode=sharp2&op_usm=0,0,0,0&iccEmbed=0&printRes=72"
              />
            }
          >
            <Caption placement="right">
              <h3>Paris</h3>
              <h5 className="light white-text text-lighten-1">
                Dapatkan Kesempatan Jalan-Jalan Ke Paris Dengan Membeli Sebuah
                Product
              </h5>
            </Caption>
          </Slide>
        </Slider>

        <Row>
          <p>Hot List</p>
          <Col m={3}>
            <Card
              className="small"
              header={
                <CardTitle image="https://ecs7.tokopedia.net/img/cache/300/attachment/2018/8/15/25749302/25749302_274a89a6-ea41-4a3a-ac6b-ce2881016369.jpg">
                  Audio
                </CardTitle>
              }
            >
              Audio Technica - Mulai Dari<font className="red"> Rp 910 rb</font>
            </Card>
          </Col>

          <Col m={3}>
            <Card
              className="small"
              header={
                <CardTitle image="https://ecs7.tokopedia.net/img/cache/300/attachment/2019/1/16/25287362/25287362_a79f0aa6-cf1f-484f-b1a8-83993245cd6f.jpg">
                  Handphone
                </CardTitle>
              }
            >
              Handphone Samsung - Mulai Dari
              <font className="red"> Rp 200 rb</font>
            </Card>
          </Col>

          <Col m={3}>
            <Card
              className="small"
              header={
                <CardTitle image="https://ecs7.tokopedia.net/img/cache/300/attachment/2018/6/26/28201197/28201197_856195f2-b0ba-4711-8200-fd95beaf1df5.jpg">
                  Sequishy
                </CardTitle>
              }
            >
              Sequishy - Mulai Dari<font className="red"> Rp 5,5 rb</font>
            </Card>
          </Col>

          <Col m={3}>
            <Card
              className="small"
              header={
                <CardTitle image="https://ecs7.tokopedia.net/img/cache/300/attachment/2018/4/23/28201197/28201197_0383072a-1766-453c-951a-8b53a719cff0.jpg">
                  Koleksi The Avenger
                </CardTitle>
              }
            >
              Koleksi The Avenger - Mulai Dari
              <font className="red"> Rp 10 rb</font>
            </Card>
          </Col>
        </Row>
      </div>
      <Pagination
        activePage={2}
        items={10}
        leftBtn={<Icon>chevron_left</Icon>}
        maxButtons={8}
        rightBtn={<Icon>chevron_right</Icon>}
      />
    </div>
  );
}

export default App;
