import S from '@sanity/desk-tool/structure-builder';

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Filtered Articles')
        .child(
          S.list()
            .title('Filters')
            .items([
              S.listItem()
                .title('Articles By Category')
                .child(
                  S.documentTypeList('category')
                    .title('Articles by Category')
                    .child((categoryId) =>
                      S.documentList()
                        .title('Articles')
                        .filter(
                          '_type == "article" && $categoryId == category._ref'
                        )
                        .params({ categoryId })
                    )
                ),
              S.listItem()
                .title('Active Articles')
                .child(
                  S.documentList()
                    .title('Articles')
                    .filter('_type == "article" && isActive == true')
                ),
              S.listItem()
                .title('Inactive Articles')
                .child(
                  S.documentList()
                    .title('Articles')
                    .filter('_type == "article" && isActive == false')
                ),
              S.listItem()
                .title('Premium Articles')
                .child(
                  S.documentList()
                    .title('Articles')
                    .filter('_type == "article" && premium == true')
                ),
            ])
        ),
      ...S.documentTypeListItems(),
    ]);
