import React from "react";
import CampaignList from "../component/CampaignList";
import { useParams } from "react-router-dom";

const data = [
  {
    company: "Chevrolet",
    campaniasTotal:[
      {
        campaniasAct: [
          {
            title: "Campaña 1",
            obj: "Generar trafico a pagina Chevrolet Camaro 2020",
            link: "https://www.chevrolet.com.mx/deportivos/carro-camaro-coupe",
            createdAt: "2020-06-23T18:25:43.511Z",
            endAt: "2020-08-23T18:25:43.511Z"
          },
          {
            title: "campaña 2",
            obj: "Reacciones a publicidad Chevrolet Camaro 2020",
            link: "https://www.facebook.com/chevroletmexico/photos/a.213660166022/10158263205531023/",
            createdAt: "2020-07-15T18:25:43.511Z",
            endAt: "2020-08-02T18:25:43.511Z"
          }
        ],
        campaniasEnding: [
          {
            title: "campaña 3",
            obj: "Trafico a pagina de chevrolet méxico",
            link: "https://www.chevrolet.com.mx",
            createdAt: "2020-01-15T18:25:43.511Z",
            endAt: "2020-02-02T18:25:43.511Z"
          },
          {
            title: "campaña 4",
            obj: "Posicionamiento de marca en FB",
            link: "https://www.facebook.com/chevroletmexico",
            createdAt: "2019-07-15T18:25:43.511Z",
            endAt: "2019-08-02T18:25:43.511Z"
          },
          {
            title: "campaña 5",
            obj: "Campaña de recolección de Likes página Chevrolet en Facebook",
            link: "https://www.facebook.com/chevroletmexico",
            createdAt: "2018-04-15T18:25:43.511Z",
            endAt: "2018-05-02T18:25:43.511Z"
          }
        ]
      }
    ]
  },
  {
    company: "Adidas",
    campaniasTotal:[
      {
        campaniasAct: [
          {
            title: "Campaña 1",
            obj: "Generar posicionamiento de marca Adidas en Facebook",
            link: "https://www.facebook.com/adidasmx/?brand_redir=182162001806727",
            createdAt: "2020-06-23T18:25:43.511Z",
            endAt: "2020-08-23T18:25:43.511Z"
          },
          {
            title: "campaña 2",
            obj: "Reacciones campaña #AdidasSUPERSTAR",
            link: "https://www.facebook.com/adidasmx/photos/a.1722284951183690/2789082397837268/",
            createdAt: "2020-07-25T18:25:43.511Z",
            endAt: "2020-08-25T18:25:43.511Z"
          },
          {
            title: "campaña 3",
            obj: "Tráfico a tienda en linea Adidas",
            link: "https://www.adidas.mx/",
            createdAt: "2020-07-15T18:25:43.511Z",
            endAt: "2020-08-02T18:25:43.511Z"
          },
          {
            title: "campaña 4",
            obj: "Generar compras en la sección de tenis Boost Hombres",
            link: "https://www.adidas.mx/boost-hombre",
            createdAt: "2020-07-15T18:25:43.511Z",
            endAt: "2020-08-02T18:25:43.511Z"
          },
          {
            title: "campaña 5",
            obj: "Generar compras en la sección de tenis Running Mujer",
            link: "https://www.adidas.mx/zapatillas_y_tenis-running-mujer",
            createdAt: "2020-07-15T18:25:43.511Z",
            endAt: "2020-08-02T18:25:43.511Z"
          }
        ]
      }
    ]
  },
  {
    company: "Grupo Bimbo",
    campaniasTotal:[
      {
        campaniasAct: [
          {
            title: "campaña 1",
            obj: "Generar tráfico a pagina de Facebook de Bimbo",
            link: "https://www.facebook.com/BimboMexico",
            createdAt: "2020-07-15T18:25:43.511Z",
            endAt: "2020-08-02T18:25:43.511Z"
          },
          {
            title: "campaña 2",
            obj: "Generar reacciones a concurso #ResuelveEnCasa",
            link: "https://www.facebook.com/BimboMexico/photos/a.166950216702595/3082350578495863/",
            createdAt: "2020-07-15T18:25:43.511Z",
            endAt: "2020-08-02T18:25:43.511Z"
          },
          {
            title: "campaña 3",
            obj: "Generar reacciones a concurso #ResuelveEnCasa",
            link: "https://www.facebook.com/BimboMexico/photos/a.166950216702595/3082350578495863/",
            createdAt: "2020-07-15T18:25:43.511Z",
            endAt: "2020-08-02T18:25:43.511Z"
          },
          {
            title: "campaña 4",
            obj: "Campaña #ResuelveEnCasa",
            link: "https://www.facebook.com/BimboMexico/videos/1760296794108839",
            createdAt: "2020-07-15T18:25:43.511Z",
            endAt: "2020-08-02T18:25:43.511Z"
          },
        ]
      },
      {
        campaniasEnding: [
          {
            title: "campaña 1",
            obj: "Campaña #ResuelveEnCasa",
            link: "https://www.facebook.com/BimboMexico/videos/1760296794108839",
            createdAt: "2020-07-15T18:25:43.511Z",
            endAt: "2020-08-02T18:25:43.511Z"
          },
          {
            title: "campaña 2",
            obj: "Campaña #ResuelveEnCasa",
            link: "https://www.facebook.com/BimboMexico/videos/1760296794108839",
            createdAt: "2020-07-15T18:25:43.511Z",
            endAt: "2020-08-02T18:25:43.511Z"
          },
          {
            title: "campaña 3",
            obj: "Campaña #ResuelveEnCasa",
            link: "https://www.facebook.com/BimboMexico/videos/1760296794108839",
            createdAt: "2020-07-15T18:25:43.511Z",
            endAt: "2020-08-02T18:25:43.511Z"
          },
          {
            title: "campaña 4",
            obj: "Campaña #ResuelveEnCasa",
            link: "https://www.facebook.com/BimboMexico/videos/1760296794108839",
            createdAt: "2020-07-15T18:25:43.511Z",
            endAt: "2020-08-02T18:25:43.511Z"
          },
          {
            title: "campaña 5",
            obj: "Campaña #ResuelveEnCasa",
            link: "https://www.facebook.com/BimboMexico/videos/1760296794108839",
            createdAt: "2020-07-15T18:25:43.511Z",
            endAt: "2020-08-02T18:25:43.511Z"
          },
          {
            title: "campaña 6",
            obj: "Campaña #ResuelveEnCasa",
            link: "https://www.facebook.com/BimboMexico/videos/1760296794108839",
            createdAt: "2020-07-15T18:25:43.511Z",
            endAt: "2020-08-02T18:25:43.511Z"
          },
          {
            title: "campaña 7",
            obj: "Campaña #ResuelveEnCasa",
            link: "https://www.facebook.com/BimboMexico/videos/1760296794108839",
            createdAt: "2020-07-15T18:25:43.511Z",
            endAt: "2020-08-02T18:25:43.511Z"
          },
          {
            title: "campaña 8",
            obj: "Campaña #ResuelveEnCasa",
            link: "https://www.facebook.com/BimboMexico/videos/1760296794108839",
            createdAt: "2020-07-15T18:25:43.511Z",
            endAt: "2020-08-02T18:25:43.511Z"
          },
          {
            title: "campaña 9",
            obj: "Campaña #ResuelveEnCasa",
            link: "https://www.facebook.com/BimboMexico/videos/1760296794108839",
            createdAt: "2020-07-15T18:25:43.511Z",
            endAt: "2020-08-02T18:25:43.511Z"
          },
          {
            title: "campaña 10",
            obj: "Campaña #ResuelveEnCasa",
            link: "https://www.facebook.com/BimboMexico/videos/1760296794108839",
            createdAt: "2020-07-15T18:25:43.511Z",
            endAt: "2020-08-02T18:25:43.511Z"
          },
        ]
      }
    ]
  },
  {
    company: "Coca-Cola",
    campaniasTotal: [
      {
        campaniasAct:[
          {
            title: "campaña 1",
            obj: "Campaña BeApp",
            link: "https://www.facebook.com/CocaColaMx/videos/341159713520192",
            createdAt: "2020-07-15T18:25:43.511Z",
            endAt: "2020-08-02T18:25:43.511Z"
          },
          {
            title: "campaña 2",
            obj: "Generar tráfico a pagina de Facebook de Coca-Cola",
            link: "https://www.facebook.com/CocaColaMx",
            createdAt: "2020-07-15T18:25:43.511Z",
            endAt: "2020-08-02T18:25:43.511Z"
          },
          {
            title: "campaña 3",
            obj: "Camapaña Coca-Cola Gaming",
            link: "https://www.facebook.com/CocaColaMx/videos/511533032891990",
            createdAt: "2020-07-15T18:25:43.511Z",
            endAt: "2020-08-02T18:25:43.511Z"
          },
          {
            title: "campaña 4",
            obj: "Generar tráfico a pagina de Facebook de Bimbo",
            link: "https://www.facebook.com/BimboMexico",
            createdAt: "2020-07-15T18:25:43.511Z",
            endAt: "2020-08-02T18:25:43.511Z"
          },
        ]
      }
    ]
  },
  {
    company: "Viva Aerobus",
    campaniasTotal: [
      {
        campaniasAct:[
          {
            title: "campaña 1",
            obj: "Campaña #TarifaZero",
            link: "https://www.facebook.com/VivaAerobus/videos/289794159121267",
            createdAt: "2020-07-15T18:25:43.511Z",
            endAt: "2020-08-02T18:25:43.511Z"
          },
          {
            title: "campaña 1",
            obj: "Campaña #TarifaZero",
            link: "https://www.facebook.com/VivaAerobus/videos/289794159121267",
            createdAt: "2020-07-15T18:25:43.511Z",
            endAt: "2020-08-02T18:25:43.511Z"
          }
        ],
        campaniasEnding:[
          {
            title: "campaña 1",
            obj: "Campaña #VivaBus",
            link: "https://www.facebook.com/VivaAerobus/videos/289794159121267",
            createdAt: "2020-07-15T18:25:43.511Z",
            endAt: "2020-08-02T18:25:43.511Z"
          }
        ]
      }
    ]
  },
  {
    company: "Hasbro",
    campaniasTotal: [
      {
        campaniasEnding:[
          {
            title: "campaña 1",
            obj: "Campaña Hasbro Gamming",
            link: "https://www.facebook.com/HasbroGamingMexico",
            createdAt: "2020-07-15T18:25:43.511Z",
            endAt: "2020-08-02T18:25:43.511Z"
          },
          {
            title: "campaña 2",
            obj: "Campaña día del Padre",
            link: "https://www.facebook.com/HasbroGamingMexico/videos/241747120457332",
            createdAt: "2020-07-15T18:25:43.511Z",
            endAt: "2020-08-02T18:25:43.511Z"
          }
        ]
      }
    ]
  }
]

const Campaign = () => {
  let { brand } = useParams();
  const [state, setState] = React.useState([])
  React.useEffect(() => {
    async function campainItem() {
      // const response = await fetch('http://localhost:8000/campanias');
      // const data = await response.json();
      // setState(data.filter(item => item.company === 'Adidas'))
      setState(data.filter(item => item.company === brand)) //TODO: recibir "company name" y settearlo como prop
    }
    campainItem();
  }, [])
  return (
    <>
      <CampaignList data={state} />
    </>
  );
}
export default Campaign