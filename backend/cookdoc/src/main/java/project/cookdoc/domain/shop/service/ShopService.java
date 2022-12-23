package project.cookdoc.domain.shop.service;

import ch.qos.logback.core.net.SyslogOutputStream;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;
import project.cookdoc.domain.shop.dto.ShopRegistrationRequest;
import project.cookdoc.domain.shop.entity.Shop;
import project.cookdoc.domain.shop.entity.ShopImage;
import project.cookdoc.domain.shop.mapper.ShopImageMapper;
import project.cookdoc.domain.shop.mapper.ShopMapper;
import project.cookdoc.domain.shop.repository.ShopImageRepository;
import project.cookdoc.domain.shop.repository.ShopRepository;
import project.cookdoc.s3.util.S3Manager;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ShopService {

    private final ShopRepository shopRepository;

    private final ShopImageRepository shopImageRepository;

    private final S3Manager s3Uploader;

    @Transactional
    public void registrationShop(ShopRegistrationRequest request, List<String> urls){

        // 1. save shop info
        Shop shop = ShopMapper.toEntity(request);
        shopRepository.save(shop);

        // 2. save shop image
        for(String url: urls) {
            ShopImage shopImage = ShopImageMapper.toEntity(url, shop.getId());
            shopImageRepository.save(shopImage);
        }
    }

    public List<Shop> getAllShops() {
        List<Shop> result = new ArrayList<>();
        List<Shop> shops = shopRepository.findAll();

        for(Shop shop : shops) {
            List<ShopImage> images = shopImageRepository.findImagesByShopId(shop.getId());
            shop.setShop_images(images);
            result.add(shop);
        }
        return result;
    }

    public Shop getDetailShop(Long shop_id) {
        Shop shop = shopRepository.getById(shop_id);

        System.out.println(shop.getName());
        System.out.println(shop.getId());

        List<ShopImage> images = shopImageRepository.findImagesByShopId(shop.getId());
        System.out.println(images);
        shop.setShop_images(images);
        return shop;
    }

    @Transactional
    public List<String> getUploadedImageURLs(List<MultipartFile> images) throws IOException {
        List<String> urls = new ArrayList<>();
        for(MultipartFile image : images) {
            String url = s3Uploader.upload(image, s3Uploader.getDirName());
            urls.add(url);
        }
        return urls;
    }
}