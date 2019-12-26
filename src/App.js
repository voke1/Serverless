import React, { Component } from 'react'
import { Table, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsDown, faThumbsUp, faImage, faMoneyCheckAlt, faSearchDollar } from '@fortawesome/free-solid-svg-icons'

export default class App extends Component {

  state = {
    isLoading: false,
    invoices: [
      {
        "id": "100",
        "Vendor": "Hankook",
        "Amount": "$18,000",
        "invoice": "1123",
        "Date": "08/21/2019"
      },

      {
        "id": "200",
        "Vendor": "Hankook",
        "Amount": "$18,000",
        "invoice": "1123",
        "Date": "08/21/2019"
      },

      {
        "id": "300",
        "Vendor": "Hankook",
        "Amount": "$18,000",
        "invoice": "1123",
        "Date": "08/21/2019"
      }
    ]
  }

  render() {
    const isLoading = this.state.isLoading
    const allInvoices = this.state.invoices

    if (isLoading) {
      return (<div>Loading...</div>)
    }

    let invoices = allInvoices.map(invoice =>
      <tr>
        <td>invoice.id</td>
        <td>invoice.Vendor</td>
        <td>invoice.Amount</td>
        <td>invoice.invoice</td>
        <td>invoice.Date</td>
        <td><Button className='btn btn-lg btn-success' onClick={() => 'this is it'}></Button></td>
        <td><Button className='btn btn-lg btn-success' onClick={() => 'this is it'}></Button></td>
        <td><Button className='btn btn-lg btn-success' onClick={() => 'this is it'}></Button></td>
        <td><Button className='btn btn-lg btn-success' onClick={() => 'this is it'}></Button></td>
        <td><Button className='btn btn-lg btn-success' onClick={() => 'this is it'}></Button></td>

      </tr>
    )
    return (
      <div className='container border-secondary rounded center'>
        <div className='row'>
          <div className='col-12'>
            <h4>Pending invoices ....The Test Company</h4>
          </div>
        </div>
        <div className='row'>
          <div className='.col-xs-12 center text-center'>
            <Table dark responsive striped bordered hover>
              <thead>
                <th>Vendor</th>
                <th>Amount</th>
                <th>Invoice</th>
                <th>Date</th>
                <th colSpan='4'>Actions</th>
                <th>Image</th>



              </thead>
              <tbody>{this.state.invoices.length === 0 ? <td colSpan='9'> All caught up</td> : ''}</tbody>
            </Table>

          </div>

        </div>
      </div>
    )
  }
}
