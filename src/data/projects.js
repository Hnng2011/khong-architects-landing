/**
 * @typedef {Object} ProjectInfo
 * @property {string} address
 * @property {string} area
 * @property {string} year
 */

/**
 * @typedef {Object} Project
 * @property {string} slug
 * @property {string} title
 * @property {string} thumbnail
 * @property {"horizontal" | "vertical"} layout
 * @property {ProjectInfo} info
 * @property {string} description
 * @property {string[]} images
 */

/** @type {Project[]} */
export const projects = [
  {
    slug: "ly-house",
    title: "Ly house",
    thumbnail: "/hotlink-ok/house-placeholder-1.png",
    layout: "horizontal",
    info: {
      address: "02 Trần Nguyên Hãn, Nha Trang, Khánh Hòa.",
      area: "225.5m²",
      year: "2024"
    },
    description: "Nhà phố phong cách Wabi-Sabi, sử dụng các vật liệu: Gỗ, gạch bông gió, gạch kính, sơn conpa,... Thiết kế mang lại cảm giác bình yên, mộc mạc và gần gũi với thiên nhiên.",
    images: [
      "/hotlink-ok/house-placeholder-3.png",
      "/hotlink-ok/house-placeholder-1.png",
      "/hotlink-ok/house-placeholder-2.png",
      "/hotlink-ok/house-placeholder-4.png",
      "/hotlink-ok/house-placeholder-1.png",
      "/hotlink-ok/house-placeholder-2.png",
      "/hotlink-ok/house-placeholder-3.png",
      "/hotlink-ok/house-placeholder-4.png"
    ]
  },
  {
    slug: "can-ho-dich-vu",
    title: "Căn hộ dịch vụ",
    thumbnail: "/hotlink-ok/house-placeholder-4.png",
    layout: "vertical",
    info: {
      address: "93/10 No Trang Long, Binh Loi Trung Ward, Ho Chi Minh City, Viet Nam",
      area: "450m²",
      year: "2023"
    },
    description: "Tòa nhà căn hộ dịch vụ phong cách tối giản, tận dụng tối đa ánh sáng tự nhiên và không khí đối lưu, tạo nên không gian sống xanh mát giữa lòng đô thị.",
    images: [
      "/hotlink-ok/house-placeholder-1.png",
      "/hotlink-ok/house-placeholder-2.png",
      "/hotlink-ok/house-placeholder-3.png",
      "/hotlink-ok/house-placeholder-4.png",
      "/hotlink-ok/house-placeholder-1.png",
      "/hotlink-ok/house-placeholder-2.png",
      "/hotlink-ok/house-placeholder-3.png",
      "/hotlink-ok/house-placeholder-4.png"
    ]
  },
  {
    slug: "thao-dien-villa",
    title: "Thảo Điền Villa",
    thumbnail: "/hotlink-ok/house-placeholder-2.png",
    layout: "horizontal",
    info: {
      address: "12 Quốc Hương, Thảo Điền, Quận 2, Tp. Thủ Đức.",
      area: "380m²",
      year: "2023"
    },
    description: "Biệt thự hiện đại với kiến trúc mở, kết nối hài hòa giữa không gian nội thất và khu vườn xanh mát bao quanh.",
    images: [
      "/hotlink-ok/house-placeholder-1.png",
      "/hotlink-ok/house-placeholder-2.png",
      "/hotlink-ok/house-placeholder-3.png",
      "/hotlink-ok/house-placeholder-4.png",
      "/hotlink-ok/house-placeholder-1.png",
      "/hotlink-ok/house-placeholder-2.png"
    ]
  },
  {
    slug: "binh-thanh-house",
    title: "Bình Thạnh House",
    thumbnail: "/hotlink-ok/house-placeholder-3.png",
    layout: "vertical",
    info: {
      address: "45/2 Điện Biên Phủ, Phường 15, Quận Bình Thạnh, Tp. HCM.",
      area: "180m²",
      year: "2022"
    },
    description: "Nhà phố thông gió tự nhiên với giếng trời lớn ở giữa, mang lại không gian sống ngập tràn ánh sáng và gió trời.",
    images: [
      "/hotlink-ok/house-placeholder-2.png",
      "/hotlink-ok/house-placeholder-3.png",
      "/hotlink-ok/house-placeholder-4.png",
      "/hotlink-ok/house-placeholder-1.png",
      "/hotlink-ok/house-placeholder-2.png",
      "/hotlink-ok/house-placeholder-3.png",
      "/hotlink-ok/house-placeholder-4.png",
      "/hotlink-ok/house-placeholder-1.png"
    ]
  },
  {
    slug: "quan-2-townhouse",
    title: "Quận 2 Townhouse",
    thumbnail: "/hotlink-ok/house-placeholder-1.png",
    layout: "horizontal",
    info: {
      address: "Trần Não, Phường Bình An, Quận 2, Tp. HCM.",
      area: "210m²",
      year: "2024"
    },
    description: "Nhà phố đương đại, sử dụng vật liệu thô mộc như bê tông trần, gỗ tự nhiên và thép đen, tạo nên vẻ đẹp cá tính và bền vững.",
    images: [
      "/hotlink-ok/house-placeholder-4.png",
      "/hotlink-ok/house-placeholder-1.png",
      "/hotlink-ok/house-placeholder-2.png",
      "/hotlink-ok/house-placeholder-3.png",
      "/hotlink-ok/house-placeholder-4.png",
      "/hotlink-ok/house-placeholder-1.png"
    ]
  },
  {
    slug: "dalat-retreat",
    title: "Dalat Retreat",
    thumbnail: "/hotlink-ok/house-placeholder-2.png",
    layout: "vertical",
    info: {
      address: "Đường Khởi Nghĩa Bắc Sơn, Phường 10, Tp. Đà Lạt.",
      area: "320m²",
      year: "2023"
    },
    description: "Không gian nghỉ dưỡng ẩn mình sườn đồi Đà Lạt, tối giản và ấm cúng với tầm nhìn trọn vẹn ra thung lũng thông xanh.",
    images: [
      "/hotlink-ok/house-placeholder-3.png",
      "/hotlink-ok/house-placeholder-4.png",
      "/hotlink-ok/house-placeholder-1.png",
      "/hotlink-ok/house-placeholder-2.png",
      "/hotlink-ok/house-placeholder-3.png",
      "/hotlink-ok/house-placeholder-4.png",
      "/hotlink-ok/house-placeholder-1.png",
      "/hotlink-ok/house-placeholder-2.png"
    ]
  },
  {
    slug: "phu-my-hung-villa",
    title: "Phú Mỹ Hưng Villa",
    thumbnail: "/hotlink-ok/house-placeholder-3.png",
    layout: "horizontal",
    info: {
      address: "Khu biệt thự Chateau, Phú Mỹ Hưng, Quận 7, Tp. HCM.",
      area: "420m²",
      year: "2022"
    },
    description: "Thiết kế biệt thự sang trọng và tinh tế, tập trung vào sự tối giản chi tiết và chất lượng vượt trội của vật liệu hoàn thiện.",
    images: [
      "/hotlink-ok/house-placeholder-2.png",
      "/hotlink-ok/house-placeholder-3.png",
      "/hotlink-ok/house-placeholder-4.png",
      "/hotlink-ok/house-placeholder-1.png",
      "/hotlink-ok/house-placeholder-2.png",
      "/hotlink-ok/house-placeholder-3.png"
    ]
  },
  {
    slug: "nha-trang-house",
    title: "Nha Trang House",
    thumbnail: "/hotlink-ok/house-placeholder-4.png",
    layout: "vertical",
    info: {
      address: "Phạm Văn Đồng, Vĩnh Hải, Tp. Nha Trang.",
      area: "200m²",
      year: "2024"
    },
    description: "Nhà phố hướng biển tận dụng luồng gió biển tự nhiên, sử dụng các giải pháp lam che nắng thông minh và mảng xanh mặt đứng.",
    images: [
      "/hotlink-ok/house-placeholder-1.png",
      "/hotlink-ok/house-placeholder-2.png",
      "/hotlink-ok/house-placeholder-3.png",
      "/hotlink-ok/house-placeholder-4.png",
      "/hotlink-ok/house-placeholder-1.png",
      "/hotlink-ok/house-placeholder-2.png",
      "/hotlink-ok/house-placeholder-3.png",
      "/hotlink-ok/house-placeholder-4.png"
    ]
  }
];
