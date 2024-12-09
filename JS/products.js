// Product data structure
const productData = {
    smartphones: {
        // Product details will be loaded here
        '13-pro-plus': {
            name: 'realme 13 Pro+ 5G',
            tagline: 'Flagship Photography Experience',
            image: '../Images/realme_13_Pro+_5G.png',
            specifications: {
                display: {
                    title: 'Display',
                    specs: [
                        'Screen Size: 6.7 inches',
                        'Resolution: 1080 x 2412 pixels',
                        'Type: OLED Display',
                        'Refresh Rate: 120Hz',
                        'Peak Brightness: 2000 nits',
                        'Protection: Corning Gorilla Glass 7i'
                    ]
                },
                camera: {
                    title: 'Camera',
                    specs: [
                        'Triple Camera Setup',
                        'Main: 50MP Sony LYT701 with OIS',
                        'Periscope: 50MP with 3x Optical Zoom',
                        'Ultra-wide: 8MP (112° FoV)',
                        'Front: 32MP Selfie Camera'
                    ]
                },
                performance: {
                    title: 'Performance',
                    specs: [
                        'Snapdragon 7s Gen 2 (4nm)',
                        '12GB RAM',
                        '256GB/512GB Storage',
                        'Android 14 with realme UI 5.0'
                    ]
                },
                battery: {
                    title: 'Battery',
                    specs: [
                        '5200mAh Battery',
                        '80W SUPERVOOC Fast Charging',
                        '50% charge in 19 minutes'
                    ]
                }
            }
        },
        '13-pro': {
            name: 'realme 13 Pro 5G',
            tagline: 'Pro Photography',
            image: '../Images/realme_13_Pro_5G.png',
            specifications: {
                display: {
                    title: 'Display',
                    specs: [
                        'Screen Size: 6.7 inches',
                        'Resolution: 1080 x 2400 pixels',
                        'Type: AMOLED',
                        'Refresh Rate: 120Hz',
                        'Peak Brightness: 1800 nits'
                    ]
                },
                camera: {
                    title: 'Camera',
                    specs: [
                        'Main: 50MP with OIS',
                        'Ultra-wide: 8MP',
                        'Macro: 2MP',
                        'Front: 16MP'
                    ]
                },
                performance: {
                    title: 'Performance',
                    specs: [
                        'Snapdragon 7 Gen 2',
                        '8GB RAM',
                        '256GB Storage',
                        'realme UI 5.0'
                    ]
                },
                battery: {
                    title: 'Battery',
                    specs: [
                        '5000mAh Battery',
                        '67W SUPERVOOC Charging',
                        'Smart Power Saving'
                    ]
                }
            }
        },
        '13-5g': {
            name: 'realme 13 5G',
            tagline: '5G for Everyone',
            image: '../Images/realme_13_5G.png',
            specifications: {
                display: {
                    title: 'Display',
                    specs: [
                        'Screen Size: 6.6 inches',
                        'Resolution: 1080 x 2400 pixels',
                        'Type: IPS LCD',
                        'Refresh Rate: 90Hz',
                        'Peak Brightness: 550 nits'
                    ]
                },
                performance: {
                    title: 'Performance',
                    specs: [
                        'MediaTek Dimensity 6100+',
                        '6GB RAM',
                        '128GB Storage',
                        'realme UI 5.0 based on Android 14'
                    ]
                },
                camera: {
                    title: 'Camera',
                    specs: [
                        'Main: 50MP',
                        'Depth: 2MP',
                        'Front: 8MP',
                        'AI Photography'
                    ]
                },
                battery: {
                    title: 'Battery',
                    specs: [
                        '5000mAh Battery',
                        '33W SUPERVOOC Charging',
                        'Power Saving Mode'
                    ]
                }
            }
        },
        'gt-7-pro': {
            name: 'realme GT 7 Pro',
            tagline: 'Speed Has a New Name',
            image: '../Images/realme_GT_7_Pro.png.webp',
            specifications: {
                display: {
                    title: 'Display',
                    specs: [
                        'Screen Size: 6.78 inches',
                        'Resolution: 1264 x 2780 pixels',
                        'Type: AMOLED',
                        'Refresh Rate: 120Hz',
                        'Peak Brightness: 6000 nits'
                    ]
                },
                camera: {
                    title: 'Camera',
                    specs: [
                        'Triple Camera Setup: 50MP + 50MP + 8MP',
                        'Front Camera: 16MP',
                        'Video: Up to 8K recording',
                        'Features: Dual-LED flash, HDR, panorama'
                    ]
                },
                performance: {
                    title: 'Performance',
                    specs: [
                        'Snapdragon 8 Elite',
                        '12GB RAM',
                        '512GB Storage',
                        'Android 15 with realme UI 6.0'
                    ]
                },
                battery: {
                    title: 'Battery',
                    specs: [
                        '5800mAh Battery',
                        '120W Fast Charging'
                    ]
                }
            }
        },
        'gt-neo-3': {
            name: 'realme GT NEO 3',
            tagline: '50% charge under 5 mins',
            image: '../Images/realme_GT_NEO_3.png.webp',
            video: '../Videos/realme GT NEO3 50% charge under 5 mins.mp4',
            specifications: {
                display: {
                    title: 'Display',
                    specs: [
                        'Screen Size: 6.7 inches',
                        'Resolution: 2412 x 1080 pixels',
                        'Type: AMOLED',
                        'Refresh Rate: 120Hz',
                        'HDR10+ Support'
                    ]
                },
                performance: {
                    title: 'Performance',
                    specs: [
                        'MediaTek Dimensity 8100',
                        'Up to 12GB RAM',
                        'Up to 256GB Storage',
                        'realme UI 3.0 based on Android 12'
                    ]
                },
                camera: {
                    title: 'Camera',
                    specs: [
                        'Main: 50MP Sony IMX766',
                        'Ultra-wide: 8MP',
                        'Macro: 2MP',
                        'Front: 16MP'
                    ]
                },
                charging: {
                    title: 'Battery & Charging',
                    specs: [
                        '4500mAh Battery',
                        '150W UltraDart Charging',
                        '50% charge in 5 minutes',
                        'Full charge in 17 minutes'
                    ]
                }
            }
        },
        'c55': {
            name: 'realme C55',
            tagline: 'Champion in its Segment',
            image: '../Images/realme_C55.png',
            video: '../Videos/realme C55 Sunshower Design Have a Magical Day!.mp4',
            specifications: {
                display: {
                    title: 'Display',
                    specs: [
                        'Screen Size: 6.72 inches',
                        'Resolution: 2400 x 1080 pixels',
                        'Type: IPS LCD',
                        'Refresh Rate: 90Hz',
                        'Peak Brightness: 680 nits'
                    ]
                },
                performance: {
                    title: 'Performance',
                    specs: [
                        'MediaTek Helio G88',
                        '8GB RAM',
                        '256GB Storage',
                        'realme UI 4.0 based on Android 13'
                    ]
                },
                camera: {
                    title: 'Camera',
                    specs: [
                        'Main: 64MP',
                        'Portrait: 2MP',
                        'Front: 8MP',
                        'AI Scene Recognition'
                    ]
                },
                battery: {
                    title: 'Battery',
                    specs: [
                        '5000mAh Battery',
                        '33W SUPERVOOC Charging',
                        'Power Saving Mode'
                    ]
                }
            }
        },
        'c67': {
            name: 'realme C67',
            tagline: 'Power Meets Style',
            image: '../Images/realme_C67.png',
            specifications: {
                display: {
                    title: 'Display',
                    specs: [
                        'Screen Size: 6.72 inches',
                        'Resolution: 1080 x 2400 pixels',
                        'Type: IPS LCD',
                        'Refresh Rate: 90Hz',
                        'Peak Brightness: 600 nits'
                    ]
                },
                performance: {
                    title: 'Performance',
                    specs: [
                        'Snapdragon 685 4G',
                        '8GB RAM',
                        '128GB Storage',
                        'realme UI 4.0 based on Android 13'
                    ]
                },
                camera: {
                    title: 'Camera',
                    specs: [
                        'Main: 108MP',
                        'Macro: 2MP',
                        'Front: 8MP',
                        'AI Photography'
                    ]
                },
                battery: {
                    title: 'Battery',
                    specs: [
                        '5000mAh Battery',
                        '33W SUPERVOOC Charging',
                        'Reverse Charging'
                    ]
                }
            }
        }
    },
    smartwatches: {
        'watch-s-pro': {
            name: 'realme Watch S Pro',
            tagline: 'Professional Smart Watch',
            image: '../Images/realme_Watch_S_Pro.png',
            video: '../Videos/realme Watch S Pro The Stylish New Pro.mp4',
            specifications: {
                display: {
                    title: 'Display',
                    specs: [
                        'Screen Size: 1.39 inches AMOLED',
                        'Resolution: 454 x 454 pixels',
                        'Protection: Corning Gorilla Glass',
                        'Brightness: 450 nits',
                        'Always-On Display'
                    ]
                },
                sensors: {
                    title: 'Sensors',
                    specs: [
                        'PPG Heart Rate Sensor',
                        'SpO2 Blood Oxygen Monitor',
                        '6-axis Accelerometer',
                        'Geomagnetic Sensor',
                        'Gyroscope Sensor'
                    ]
                },
                features: {
                    title: 'Features',
                    specs: [
                        'Dual-Satellite GPS',
                        '5ATM Water Resistance',
                        '15 Sports Modes',
                        'Sleep Tracking',
                        'Music & Camera Control'
                    ]
                },
                battery: {
                    title: 'Battery',
                    specs: [
                        'Capacity: 420mAh',
                        '14-day Battery Life',
                        'Magnetic Charging'
                    ]
                }
            }
        },
        'watch-s': {
            name: 'realme Watch S',
            tagline: 'Smart Life Made Better',
            image: '../Images/realme_Watch_S.jpg',
            video: '../Videos/realme Watch S Smarter Round the Clock.mp4',
            specifications: {
                display: {
                    title: 'Display',
                    specs: [
                        'Screen Size: 1.3 inches',
                        'Resolution: 360 x 360 pixels',
                        'Type: TFT Display',
                        '5-level Brightness Adjustment'
                    ]
                },
                features: {
                    title: 'Features',
                    specs: [
                        'Auto Heart Rate Monitor',
                        'Blood Oxygen Monitor',
                        'IP68 Water Resistant',
                        '16 Sports Modes',
                        'Sleep Tracking'
                    ]
                },
                battery: {
                    title: 'Battery',
                    specs: [
                        '15-day Battery Life',
                        'Magnetic Charging'
                    ]
                }
            }
        },
        'band': {
            name: 'realme Band',
            tagline: 'Your Fitness Companion',
            image: '../Images/realme_Band.jpg',
            specifications: {
                display: {
                    title: 'Display',
                    specs: [
                        'Screen Size: 0.96 inches',
                        'Resolution: 160 x 80 pixels',
                        'Color Display',
                        '5 Watch Faces'
                    ]
                },
                features: {
                    title: 'Features',
                    specs: [
                        'Real-time Heart Rate Monitor',
                        'IP68 Water Resistant',
                        '9 Sports Modes',
                        'Smart Notifications',
                        'Sleep Tracking'
                    ]
                },
                battery: {
                    title: 'Battery',
                    specs: [
                        'Capacity: 90mAh',
                        'USB-A Direct Charging'
                    ]
                }
            }
        }
    },
    audio: {
        'buds-air6-pro': {
            name: 'realme Buds Air 6 Pro',
            tagline: 'Premium Active Noise Cancellation',
            image: '../Images/realme_Buds_Air6_Pro.png',
            specifications: {
                audio: {
                    title: 'Audio',
                    specs: [
                        '50dB Active Noise Cancellation',
                        'Hi-Res Audio Certified',
                        '12.4mm Dynamic Driver',
                        'LDAC Support'
                    ]
                },
                features: {
                    title: 'Features',
                    specs: [
                        'Bluetooth 5.3',
                        'Dual Device Connection',
                        'Low Latency Gaming Mode',
                        'Touch Controls'
                    ]
                },
                battery: {
                    title: 'Battery',
                    specs: [
                        '40 Hours Total Playback',
                        'Fast Charging Support',
                        '10 mins charge = 7 hours playback'
                    ]
                }
            }
        },
        'buds-air6': {
            name: 'realme Buds Air 6',
            tagline: 'Pure Bass Experience',
            image: '../Images/realme_Buds_Air6.png',
            specifications: {
                audio: {
                    title: 'Audio',
                    specs: [
                        '45dB Active Noise Cancellation',
                        '10mm Dynamic Bass Driver',
                        'Dual-mic Noise Cancellation',
                        'Bass Boost+'
                    ]
                },
                features: {
                    title: 'Features',
                    specs: [
                        'Bluetooth 5.3',
                        'IPX5 Water Resistant',
                        'Touch Controls',
                        'Game Mode'
                    ]
                },
                battery: {
                    title: 'Battery',
                    specs: [
                        '30 Hours Total Playback',
                        'Quick Charge',
                        'Type-C Charging'
                    ]
                }
            }
        },
        'buds-air5': {
            name: 'realme Buds Air 5',
            tagline: 'Smart Audio Companion',
            image: '../Images/realme_Buds_Air5.png',
            specifications: {
                audio: {
                    title: 'Audio',
                    specs: [
                        '40dB Active Noise Cancellation',
                        '12.4mm Dynamic Driver',
                        'Dual-mic ENC',
                        'Clear Voice Technology'
                    ]
                },
                features: {
                    title: 'Features',
                    specs: [
                        'Bluetooth 5.2',
                        'IPX4 Water Resistant',
                        'Smart Touch Controls',
                        'Low Latency Gaming Mode'
                    ]
                },
                battery: {
                    title: 'Battery',
                    specs: [
                        '38 Hours Total Playback',
                        'Fast Charging',
                        'Type-C Port'
                    ]
                }
            }
        },
        'buds-wireless-pro': {
            name: 'realme Buds Wireless Pro',
            tagline: 'Professional Audio Quality',
            image: '../Images/realme_Buds_Wireless_Pro.jpg',
            specifications: {
                audio: {
                    title: 'Audio',
                    specs: [
                        'Sony LDAC HD Audio',
                        'Active Noise Cancellation',
                        '13.6mm Bass Boost Driver',
                        'Environmental Noise Cancellation'
                    ]
                },
                features: {
                    title: 'Features',
                    specs: [
                        'Magnetic Instant Connection',
                        'IPX4 Water Resistant',
                        '119ms Super Low Latency',
                        'Dual Device Connection'
                    ]
                },
                battery: {
                    title: 'Battery',
                    specs: [
                        '22 Hours Playback',
                        'Quick Charge',
                        '5 mins charge = 4 hours playback'
                    ]
                }
            }
        }
    }
};

function loadProductDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    
    if (productId) {
        for (let category in productData) {
            if (productData[category][productId]) {
                displayProductDetails(productData[category][productId]);
                break;
            }
        }
    }
}

function displayProductDetails(product) {
    if (!product) return;
    
    document.querySelector('.product-title').textContent = product.name;
    document.querySelector('.product-tagline').textContent = product.tagline;
    
    const imageElement = document.createElement('img');
    imageElement.src = product.image;
    imageElement.alt = product.name;
    document.querySelector('.product-image').appendChild(imageElement);
    
    const specsGrid = document.querySelector('.specs-grid');
    for (let section in product.specifications) {
        const specSection = product.specifications[section];
        const sectionElement = createSpecSection(specSection.title, specSection.specs);
        specsGrid.appendChild(sectionElement);
    }
}

function createSpecSection(title, specs) {
    const section = document.createElement('div');
    section.className = 'spec-group';
    
    const heading = document.createElement('h3');
    heading.textContent = title;
    section.appendChild(heading);
    
    const list = document.createElement('ul');
    specs.forEach(spec => {
        const item = document.createElement('li');
        item.textContent = spec;
        list.appendChild(item);
    });
    section.appendChild(list);
    
    return section;
}

document.addEventListener('DOMContentLoaded', loadProductDetails);