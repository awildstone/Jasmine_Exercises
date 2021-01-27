describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();
    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('should add a new server to the serverTbody table on submitServerInfo()', () => {
    submitServerInfo();
    let td = document.getElementById('server1').firstChild;
    expect(td.innerText).toEqual('Alice');
  });

  it('should create a new table row and cell on updateServerTable()', () => {
    submitServerInfo();
    updateServerTable();
    let theTableTds = document.querySelectorAll('#serverTable tbody tr td');
    expect(theTableTds.length).toEqual(3);
    expect(theTableTds[0].innerText).toEqual('Alice');
    expect(theTableTds[1].innerText).toEqual('$0.00');
    expect(theTableTds[2].innerText).toEqual('X');
  });

  afterEach(function() {
    //remove the serverName from the server form
    serverNameInput.value = '';
    //remove the server from the allServers{}
    allServers = {};
    //reset the serverID count
    serverId = 0;
    //remove the server from the table
    serverTbody.innerHTML = '';
  });
});
