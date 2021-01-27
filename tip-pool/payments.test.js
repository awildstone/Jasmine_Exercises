describe('Payments test (with setup and teardown)', () => {

    beforeEach(() => {
        billAmtInput.value = 25;
        tipAmtInput.value = 5;
    });

    it('should add a new payment to allPayments{} on submitPaymentInfo()', () => {
        submitPaymentInfo();
        expect(Object.keys(allPayments).length).toEqual(1);
        // expect(allPayments['payment' + paymentId]['tipPercent']).toEqual(20);
        expect(allPayments['payment1'].billAmt).toEqual('25');
        expect(allPayments['payment1'].tipAmt).toEqual('5');
        expect(allPayments['payment1'].tipPercent).toEqual(20);
    });

    it('should return a new payment{} with tip calculated on createCurPayment()', () => {
        expect(createCurPayment()).toEqual({'billAmt': '25', 'tipAmt': '5', 'tipPercent': 20});
        expect(typeof createCurPayment()).toEqual('object');
    });

    it('should create a new row of tds and append to paymentTbody table on appendPaymentTable()', () => {
        submitPaymentInfo();
        let theTableTds = document.querySelectorAll('#paymentTable tbody tr td');
        expect(theTableTds.length).toEqual(4);
        expect(theTableTds[0].innerText).toEqual('$25');
        expect(theTableTds[1].innerText).toEqual('$5');
        expect(theTableTds[2].innerText).toEqual('20%');
        expect(theTableTds[3].innerText).toEqual('X');
    });

    it('should create a new row of tds and append summaryTds table on updateSummary()', () => {
        submitPaymentInfo();
        expect(summaryTds.length).toEqual(3);
        expect(summaryTds[0].innerText).toEqual('$25');
        expect(summaryTds[1].innerText).toEqual('$5');
        expect(summaryTds[2].innerText).toEqual('20%');
    });

    afterEach(() => {
        //reset the bill value in the form
        billAmtInput.value = '';
        //reset the tip value in the form
        tipAmtInput.value = '';
        //reset the allPayments {}
        allPayments = {};
        //reset paymentId counter
        paymentId = 0;
        //remove the payment table elements
        paymentTbody.innerHTML = '';
        //remove the payment summary table elements
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
        //reset the server payment table
        serverTbody.innerHTML = '';
    });

});