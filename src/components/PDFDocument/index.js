import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

const style = StyleSheet.create({
  page: {
    flexDirection: "center",
    alignItems: "center",
  },
  box: { margin: 30 },
  flex: {
    width: 500,
    margin: 30,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    textAlign: "center",
  },
});

const PDFDocument = ({ cartItems, totalCheckout }) => (
  <Document>
    <Page size="A4" style={style.page}>
      <View style={style.box}>
        <Text style={style.text}>Nota Fiscal</Text>
        <Text style={style.text}>Nº</Text>
      </View>

      <View style={style.box}>
        <Text>CONFERÊNCIA DE CONTA</Text>
        <Text>Mercado da Fruta</Text>
      </View>

      <View style={style.box}>
        <Text>** Não é Documento Fiscal **</Text>
      </View>

      <View>
        <Text style={style.title}>Produto</Text>
        {cartItems?.map((item, index) => {
          return (
            <View key={item.title + index} style={style.flex}>
              <Text>{item.title}</Text>
              <Text>{item.prices.price}</Text>
            </View>
          );
        })}

        <View style={style.box}>
          <Text>
            Total: <sup>R$</sup>
            {totalCheckout}
          </Text>
        </View>
      </View>
    </Page>
  </Document>
);

export default PDFDocument;
