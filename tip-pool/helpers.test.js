describe('Helpers test (with setup and teardown)', () => {

    beforeEach(() => {
        billAmtInput.value = 100;
        tipAmtInput.value = 22;
    });

    it('should return sum from allPayments{} for the provided type on sumPaymentTotal(type)', ()=> {
        submitPaymentInfo();

        billAmtInput.value = 50;
        tipAmtInput.value = 15;
        submitPaymentInfo();

        expect(sumPaymentTotal('billAmt')).toEqual(150);
        expect(sumPaymentTotal('tipAmt')).toEqual(37);
        expect(sumPaymentTotal('tipPercent')).toEqual(52);
    });

    it('should calculate the tip % on calculateTipPercent(billAmt, tipAmt)', () => {
        expect(calculateTipPercent(billAmtInput.value, tipAmtInput.value)).toEqual(22);
        expect(calculateTipPercent(25, 5)).toEqual(20);
        expect(calculateTipPercent(35, 5)).toEqual(14);
    });

    it('should create new tds and append to tr on appendTd(tr, value)', () => {
        let testTr = document.createElement('tr');
        appendTd(testTr, 'test');

        expect(testTr.children.length).toEqual(1);
        expect(testTr.firstChild.innerText).toEqual('test');
    });

    it('should add new td to a specified table on appendDeleteBtn(tr, type)', () => {
        let testTr = document.createElement('tr');
        appendDeleteBtn(testTr, 'test');

        expect(testTr.children.length).toEqual(1);
        expect(testTr.firstChild.innerText).toEqual('X');
    });

    afterEach(() => {
        //reset form values for bill
        billAmtInput.value = '';
        //reset form values for tipA
        tipAmtInput.value = '';
        //remove the payment table elements
        paymentTbody.innerHTML = '';
        //remove the payment td table elements
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
        //reset server table elements
        serverTbody.innerHTML = '';
        //reset values for allPayments()
        allPayments = {};
        //reset payment id count
        paymentId = 0;
    });

});