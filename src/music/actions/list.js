import * as actionTypes from '../constants/actionTypes';

export const loadList = (list) => ({
  type: actionTypes.LIST_LOAD,
  payload: {
    ...list
  }
})

export const getList = () => dispatch => {
  dispatch(loadList({
    hot: {
      usUk: [
        {
          name: 'That Girl',
          url: 'http://m2.chiasenhac.vn/mp3/us-uk/us-pop/that-girl~olly-murs~tsvqwb75qe9qth.html',
          id: 'tsvqwb75qe9qth'
        },
        {
          name: 'Girls Like You',
          url: 'http://m2.chiasenhac.vn/mp3/us-uk/us-pop/girls-like-you~maroon-5-cardi-b~tsvbt56qqqfhke.html',
          id: 'tsvbt56qqqfhke'
        },
        {
          name: 'Born To Be Yours',
          url: 'http://m2.chiasenhac.vn/mp3/us-uk/us-dance-remix/born-to-be-yours~kygo-imagine-dragons~tsvbdt07qqmfnt.html',
          id: 'tsvbdt07qqmfnt'
        }
      ],
      vn: [
        {
          name: 'Duyên Mình Lỡ',
          url: 'http://m2.chiasenhac.vn/mp3/vietnam/v-pop/duyen-minh-lo~huong-tram~tsvbcb3qqqvqwe.html',
          id: 'tsvbcb3qqqvqwe'
        },
        {
          name: 'Đừng Quên Tên Anh',
          url: 'http://m2.chiasenhac.vn/mp3/vietnam/v-pop/dung-quen-ten-anh~hoa-vinh~tsvbq365qqewkh.html',
          id: 'tsvbq365qqewkh'
        },
        {
          name: 'Đến Với Nhau Là Sai',
          url: 'http://m2.chiasenhac.vn/mp3/vietnam/v-pop/den-voi-nhau-la-sai~noo-phuoc-thinh~tsvbd0bsqqmnq4.html',
          id: 'tsvbd0bsqqmnq4'
        }
      ],
      kr: [
        {
          name: 'Ddu-Du Ddu-Du',
          url: 'http://m2.chiasenhac.vn/mp3/korea/k-rap-hiphop/ddu-du-ddu-du~blackpink~tsvbdq06qqmenk.html',
          id: 'tsvbdq06qqmenk'
        },
        {
          name: 'Baam',
          url: 'http://m2.chiasenhac.vn/mp3/korea/k-dance-remix/baam~momoland~tsvbdss6qqm44k.html',
          id: 'tsvbdss6qqm44k'
        },
        {
          name: 'I\'m So Sick',
          url: 'http://m2.chiasenhac.vn/mp3/korea/k-pop/im-so-sick~apink~tsvbcbqdqqvqem.html',
          id: 'tsvbcbqdqqvqem'
        }
      ]
    },
  
    news: [
      {
        name: 'Blah Blah Blah (Bassjackers Remix)',
        url: 'http://m2.chiasenhac.vn/mp3/us-uk/us-dance-remix/blah-blah-blah-bassjackers-remix~armin-van-buuren~tsvbc55dqqvhhm.html',
        id: 'tsvbc55dqqvhhm'
      },
      {
        name: 'Reload',
        url: 'http://m2.chiasenhac.vn/mp3/korea/k-pop/reload~t-ara~tsvbcsmrqqv48a.html',
        id: 'tsvbcsmrqqv48a'
      },
      {
        name: 'A Bitter Day',
        url: 'http://m2.chiasenhac.vn/mp3/korea/k-pop/a-bitter-day~gna-jun-hyung-hyuna~tsvbcsqmqqv4e8.html',
        id: 'tsvbcsqmqqv4e8'
      }
    ]
  }));
}