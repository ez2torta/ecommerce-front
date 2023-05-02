import Center from "@/components/Center";
import Header from "@/components/Header";
import Title from "@/components/Title";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import styled from "styled-components";
import WhiteBox from "@/components/WhiteBox";
import ProductImages from "@/components/ProductImages";
import Button from "@/components/Button";
import CartIcon from "@/components/icons/CartIcon";
import InstagramIcon from "@/components/icons/InstagramIcon";
import WhatsappIcon from "@/components/icons/WhatsappIcon";
import { useContext } from "react";
import { CartContext } from "@/components/CartContext";
import Link from "next/link";

const ColWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  @media screen and (min-width: 768px) {
    grid-template-columns: 0.8fr 1.2fr;
  }
  gap: 40px;
  margin: 40px 0;
`;
const PriceRow = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;
const Price = styled.span`
  font-size: 1.4rem;
`;

const preguntarWhatsapp = ({ _id, title }) => {
  const whatsAppBaseURL = "https://wa.me/";
  const telephoneNumber = "56975173774";
  let whatsappMsg = `Hola Tortita! Tengo una consulta sobre el producto ${title} (${_id}) y me interesa saber más información.`;
  let finalMessage = `${whatsAppBaseURL}${telephoneNumber}?text=${encodeURIComponent(
    whatsappMsg
  )}`;
  window.open(finalMessage, "_blank");
};

const preguntarInstagram = ({ _id, title }) => {
  const InstagramBaseURL = "https://ig.me/m/ontortita";
  window.open(InstagramBaseURL, "_blank");
};

export default function ProductPage({ product }) {
  const { addProduct } = useContext(CartContext);
  const addProductToCart = (id) => {
    addProduct(id);
  };
  const productImages =
    product.images.length > 0 ? product.images : ["/no-image.jpg"];
  return (
    <>
      <Header />
      <Center>
        <ColWrapper>
          <WhiteBox>
            <ProductImages images={productImages} />
          </WhiteBox>
          <div>
            <Title>{product.title}</Title>
            <PriceRow>
              <div>
                <Price>$ {product.price.toLocaleString("es-CL")}</Price>
              </div>
            </PriceRow>
            <p>{product.description}</p>

            <div>
              <Link
                href={"/cart"}
                onClick={() => addProductToCart(product._id)}
              >
                <Button block primary>
                  <CartIcon /> Agregar al Carrito
                </Button>
              </Link>
              <Button block whatsapp onClick={() => preguntarWhatsapp(product)}>
                <WhatsappIcon />
                Consultar por Whatsapp
              </Button>
              <Button
                block
                instagram
                onClick={() => preguntarInstagram(product)}
              >
                <InstagramIcon />
                Consultar por Instagram
              </Button>
            </div>
          </div>
        </ColWrapper>
      </Center>
    </>
  );
}

export async function getServerSideProps(context) {
  await mongooseConnect();
  const { id } = context.query;
  const product = await Product.findById(id);
  return {
    props: {
      product: JSON.parse(JSON.stringify(product)),
    },
  };
}
