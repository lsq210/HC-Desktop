import utils from '../utils'

describe('Launch', function () {
  beforeEach(utils.beforeEach)
  afterEach(utils.afterEach)

  it('shows the proper application title', function () {
    return this.app.client.getTitle()
      .then(title => {
        expect(title).to.equal('空气质量可视化系统')
      })
  })
})
