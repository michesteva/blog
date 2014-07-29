module Jekyll

  class CategoryPage < Page
    def initialize(site, base, dir, category)
      @site = site
      @base = base
      @dir = dir
      @name = 'index.html'

      self.process(@name)
      self.read_yaml(File.join(base, '_layouts'), 'categories_item.html')
      self.data['category'] = category

      category_title_prefix = site.config['category_title_prefix'] || 'Category: '
      self.data['title'] = "#{category_title_prefix}#{category.capitalize}"
      self.data['title_meta'] = "#{category.capitalize}"
      self.data['description'] = "#{category.capitalize} posts in the CartoDB Blog. All things CartoDB"
    end
  end

  class CategoryPageGenerator < Generator
    safe true

    def generate(site)
      if site.layouts.key? 'categories_item'
        dir = site.config['categories_dir'] || 'categories'
        site.categories.keys.each do |category|
          site.pages << CategoryPage.new(site, site.source, File.join(dir, category.gsub(/[^A-Za-z0-9]/, '-')), category)
        end
      end
    end
  end

end
