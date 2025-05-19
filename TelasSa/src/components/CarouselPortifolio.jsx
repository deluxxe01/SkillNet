import { useState, useContext, useEffect } from "react"
import { GlobalContext } from "../contexts/GlobalContext"
import { Navigation } from "swiper/modules"
import { Swiper,SwiperSlide } from "swiper/react"
import Modal from "react-modal"
import './CarouselPortifolio.css'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

function CarouselPortifolio() {

    const {imagensPort, setImagensPort} = useContext(GlobalContext)

    // function adcImg() {
    //   console.log(imagensPort)
    //   imagensPort.push({id:(imagensPort.length + 1), img:(img)})
    // }

    
    ///Exclusão de imagens///

    const [imagemParaExcluir, setImagemParaExcluir] = useState(null);

    function confirmarExclusao(event) {
      const id = Number(event.currentTarget.getAttribute('data-iddelimglivro'));
      setImagemParaExcluir(id); // guarda qual imagem será excluída
      abrirModalExclusao();     // abre modal de confirmação
    }
    
    function excluirImg(event) {
      if (imagemParaExcluir === null) return;

        setImagensPort((prevImgs) =>
          prevImgs.filter((img) => img.id !== imagemParaExcluir)
      );

        fecharModalExclusao();
        setImagemParaExcluir(null); // limpa o estado
      }
      
    ///Exclusão de imagens///
      
      

    ///Adição de imagens///

    const [imagemParaAdicionar, setImagemParaAdicionar] = useState(null);


    ///Adição de imagens///




    ///Edição de imagens///
  
  
      const [imagemSelecionada, setImagemSelecionada] = useState(null);
  
      function editarImg(event) {
        const idImgPort = Number(event.currentTarget.getAttribute('data-idimglivro'));
        const imagem = imagensPort.find((img) => img.id === idImgPort);
        setImagemSelecionada(imagem);
        abrirModalEdit();
      }
  
      function salvarEdicao() {
        if (!imagemSelecionada) return;
      
        setImagensPort((prevImgs) =>
          prevImgs.map((img) =>
            img.id === imagemSelecionada.id ? { ...img, img: imagemSelecionada.img } : img
          )
        );
      
        fecharModalEdit();
      }
  
    ///Edição de imagens///



    ///Modals///

    
      ///Modal Exc/Adc/Edt///

    const [modalIsOpen, setIsOpen] = useState(false)
    function abrirModal() {
      setIsOpen(true)
    }
    function fecharModal() {
      setIsOpen(false)
    }

        ///Modal Exc/Adc/Edt///


        ///Modal Exc///

    const [modalExcIsOpen, setModalExcOpen] = useState(false)
    function abrirModalExclusao() {
      setModalExcOpen(true)
    }
    function fecharModalExclusao(){
      setModalExcOpen(false)
    }

      ///Modal Exc///

      ///Modal Edt///
    const [modalEditIsOpen, setEditIsOpen] = useState(false)
    function abrirModalEdit() {
      setEditIsOpen(true)
    }
    function fecharModalEdit() {
      setEditIsOpen(false)
    }  
    function editarImg() {
      abrirModalEdit()
    }

      ///Modal Edt///

      ///Modal Adc///

    const [ModalAdcIsOpen, setModalAdcOpen] = useState(false)
    function abrirModalAdc() {
      setModalAdcOpen(true)
    }
    function fecharModalAdc() {
      setModalAdcOpen(false)
    }

  ///Modals///




    useEffect(() => {
      console.log("Imagens atualizadas:", imagensPort);
    }, [imagensPort]);


  return (
    <div className="carouselPort">
      <Swiper
      modules={[Navigation]}
      spaceBetween={10}
      slidesPerView={1}
      pagination={{ clickable: true}}
      navigation
      loop
      autoplay={{
        stopOnLastSlide: false,
      }}>
        {imagensPort.map((item) =>(
          <SwiperSlide key={item.id}>
            <img
            className="imgsPortifolio"
            src={item.img}
            
            />
          </SwiperSlide>
        ))}

      </Swiper><br /><br />
      <div className="editDeleteButton">
        <button
        className="ButtonEditarImgs"
        onClick={abrirModal}
        ><label className="txtButtonEdtExc">Adicionar/Editar</label>
        <img className="imgButtonEdtExc" src="./icon_lapis1.svg"/>
        </button>
      </div>
      <Modal
      className="ModalEdt/Exc/Adc"
      isOpen={modalIsOpen}
      onRequestClose={fecharModal}
      ariaHideApp={false}
      >
        <div className="containerModalPort">
          <button className="buttonFecharModal" onClick={fecharModal}>X</button>
          <label className="txtModalUm">Qual imagen deseja editar ou excluir?</label>
          <div className="barra1"></div>

      <Swiper
      modules={[Navigation]}
      spaceBetween={10}
      slidesPerView={1}
      pagination={{ clickable: true}}
      navigation
      loop
      autoplay={{
        stopOnLastSlide: false,
      }}
      className="swiperModal">
        {imagensPort.map((item) =>(
          <SwiperSlide key={item.id}>
            <img className="imgsPortifolioModal" src={item.img} alt="" />
            <div className="buttonsEdit_Exc">
              <button 
              className="excluirImg"
              onClick={confirmarExclusao}
              data-iddelimglivro={item.id}
              >
                <img src="./trash_icon.svg" alt="" />
              </button>
              <button 
              className="editarImg"
              onClick={editarImg}
              data-idimglivro={item.id}
              >
                <img src="./edit_icon.svg" alt="" />
              </button>
            </div>
          </SwiperSlide>
          
        ))}

      </Swiper>

        </div>
      </Modal>

      <Modal
        isOpen={modalEditIsOpen}
        onRequestClose={fecharModalEdit}
        ariaHideApp={false}
        className="modalEditImg"
      >
        <div className="containerModalEdit">
          <p className="txtModalEdit">Editar Imagem</p>

          {imagemSelecionada && (
            <>
              <img
                src={imagemSelecionada.img}
                alt="Imagem atual"
                className="preImagen"
              /><br /><br />

              <label
              className="txtEditImg"
              htmlFor="uploadInput"
              >Selecione a imagem</label>

              <input
                id="uploadInput"
                type="file"
                accept="image/*"
                style={{ display: 'none' }}
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (file) {
                    const novaURL = URL.createObjectURL(file);
                    setImagemSelecionada({
                      ...imagemSelecionada,
                      img: novaURL
                    });
                  }
                }}
              />
              
              <div className="buttonsModalEdit">
                <button
                onClick={salvarEdicao}
                className="buttonSalvar"
                >Alterar</button>
                <button
                onClick={fecharModalEdit}
                className="buttonFechar"
                >Cancelar</button>
              </div>

            </>
          )}
        </div>
      </Modal>

      <Modal
      isOpen={modalExcIsOpen}
      onRequestClose={fecharModalExclusao}
      ariaHideApp={false}
      className="modalExclusao"
      >
        <div className="containerExcImg">
          <img src="./icon_exclusao.svg" alt="" /><br />
          <div className="containerTxt">
            <label className="modalExcTxt1">Tem certeza?</label><br /><br />
            <label className="modalExcTxt2">Se confirmar não terá como recuperar o item</label><br /><br />
          </div>
          <div className="containerButtonsExc">
            <button
            onClick={excluirImg}
            className="buttonExc"
            >Excluir</button>
            <button
            onClick={fecharModalExclusao}
            className="buttonCancelExc"
            >Cancelar</button>
          </div>
        </div>

      </Modal>

    </div>
  )
}

export default CarouselPortifolio


// const [img, setImg] = useState('')
    // const [fileName, setFileName] = useState('')

    // const handleImageChange  = (e) => {
    // const file = e.target.files[0]
    // if(file) {
    //     setFileName('')

    //     const reader = new FileReader()
    //      reader.onloadend = () => {
    //         setImg(reader.result)
    //     }
    //     reader.readAsDataURL(file)

    // }else{
    //     setFileName('')
    // }}



/* <Modal
      className="modalEditImg"
      isOpen={modalEditIsOpen}
      onRequestClose={fecharModalEdit}
      ariaHideApp={false}
      >
      <label className="txtModalEdit">Deseja alterar para qual imagem?</label><br />

      <img className="selectImg" src="" alt="" /><br />

      <label className='escolherImg' htmlFor="uploadInput">Selecione sua imagem</label>
      <input
      id='uploadInput'
      type='file'
      accept="image/*"
      // onChange={handleImageChange}
      style={{ display: "none" }}
      />
      <div className="buttonsConf">
        <button
        onClick={alterarImg}
        className="buttonAlterar"
        >Alterar</button>

        <button
        className="buttonCancelar"
        onClick={fecharModalEdit}
        >Cancelar</button>
      </div>
      </Modal> */