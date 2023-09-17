const sql = require('mssql');
const dbConnection = require('./db.config');
console.log(dbConnection);
async function getSalesProducts(){
console.log(' Connecting to SQL....... Cloud Server');
let dbContext = await sql.connect(dbConnection);
console.log('The Databse connection was Successful');
console.log('Getting data');
let results = await dbContext.request()
.query(`
SELECT TOP(20)
productId,
name,
productNumber,
color
listPrice
FROM
salesLT.Product
`);
console.log(`Returned SQL results`);
return results;
}
async function getSalesByID(DataID){
    console.log(' Connecting to SQL....... Cloud Server');
    let dbContext = await sql.connect(dbConnection);
    console.log('The Databse connection was Successful');
    console.log('Getting data');
    let results = await dbContext.request().input('ProductID',sql.VarChar,DataID)
    .query(`
    SELECT
    productId,
    name,
    productNumber,
    color
    listPrice
    FROM
    salesLT.Product where ProductID =@ProductID;
    `);
    console.log(`Returned Product record`);
    return results;
    }
async function CreateSalesProducts(salesData){
    console.log(' Connecting to SQL....... Cloud Server');
    let dbContext = await sql.connect(dbConnection);
    console.log('The Databse connection was Successful');
    try {
        console.log('Inserting new sales record...');
        const result = await dbContext.request()
          .input('Name', sql.VarChar, salesData.name)
          .input('ProductNumber', sql.VarChar, salesData.productNumber)
          .input('Color', sql.VarChar, salesData.color)
          .input('ListPrice', sql.Decimal, salesData.listPrice)
          .query(`
            INSERT INTO salesLT.Product (Name, ProductNumber, Color, ListPrice)
            VALUES (@Name, @ProductNumber, @Color, @ListPrice)
          `);
    
        console.log(`Inserted ${result.rowsAffected} row(s)`);
        return { success: true, message: 'Sales record created successfully' };
      } catch (error) {
        console.error('Error inserting sales record:', error.message);
        throw error;
      }

    }

    async function getUsers(){
        console.log(' Connecting to SQL....... Cloud Server');
        let dbContext = await sql.connect(dbConnection);
        console.log('The Databse connection was Successful');
        console.log('Getting data');
        let results = await dbContext.request()
        .query(`
        SELECT TOP(20)
        FirstName,
        CompanyName,
        Title,
        CompanyName,
        SalesPerson,
        Phone
        FROM
        salesLT.Customer
        `);
        console.log(`Returned SQL results`);
        return results;
        }

        async function getaddress()
        {
            console.log(' Connecting to SQL....... Cloud Server');
            let dbContext = await sql.connect(dbConnection);
            console.log('The Databse connection was Successful');
            console.log('Getting data');
            let results = await dbContext.request()
            .query(`
            SELECT TOP(20)
            AddressID,
            City,
            StateProvince,
            CountryRegion,
            ModifiedDate
            FROM
            salesLT.Address
            `);
            console.log(`Returned SQL results`);
            return results;
            }

            async function getSalesOrder()
            {
                console.log(' Connecting to SQL....... Cloud Server');
                let dbContext = await sql.connect(dbConnection);
                console.log('The Databse connection was Successful');
                console.log('Getting data');
                let results = await dbContext.request()
                .query(`
                SELECT TOP(20)
                SalesOrderID,
                SalesOrderDetailID,
                OrderQty,
                ProductID,
                UnitPriceDiscount
                FROM
                salesLT.SalesOrderDetail
                `);
                console.log(`Returned SQL results`);
                return results;
                }

                async function getjoin()
                {
                    console.log(' Connecting to SQL....... Cloud Server');
                    let dbContext = await sql.connect(dbConnection);
                    console.log('The Databse connection was Successful');
                    console.log('Getting data');
                    let results = await dbContext.request()
                    .query(`
                    SELECT TOP(20)
                    SalesLT.Product.ProductID,
                    SalesLT.Product.Name,
                    SalesLT.Product.ProductModelID,
                    SalesLT.ProductModel.Name,
                    SalesLT.Product.ProductCategoryID,
                    SalesLT.ProductModelProductDescription.Culture
                    FROM SalesLT.Product
                    JOIN SalesLT.ProductModel
                    ON SalesLT.Product.ProductModelID = SalesLT.ProductModel.ProductModelID
                    JOIN SalesLT.ProductModelProductDescription
                    ON SalesLT.Product.ProductCategoryID = SalesLT.ProductModelProductDescription.ProductModelID;
                    `);
                    console.log(`Returned SQL results`);
                    return results;
                    }
                    
                

            

//Export
module.exports = {getSalesProducts :getSalesProducts,
    CreateSalesProducts :CreateSalesProducts,
    getSalesByID:getSalesByID,
    getUsers:getUsers,
    getaddress:getaddress,
    getSalesOrder:getSalesOrder,
    getjoin:getjoin

};
//module.exports = {CreateSalesProducts :CreateSalesProducts};