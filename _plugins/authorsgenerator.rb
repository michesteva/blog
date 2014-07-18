module Jekyll

  class AuthorPage < Page
    def initialize(site, base, dir, author)
      @site = site
      @base = base
      @dir = dir
      @name = 'index.html'

      self.process(@name)
      self.read_yaml(File.join(base, '_layouts'), 'authors_item.html')
      self.data['author'] = author

      author_title_prefix = site.config['author_title_prefix'] || 'Author: '
      self.data['title'] = "#{author_title_prefix}#{author}"
    end
  end

  class AuthorPageGenerator < Generator
    safe true

    def generate(site)
      if site.layouts.key? 'authors_item'
        dir = site.config['authors_dir'] || 'author'

        site.data['authors'].each do |author|
          site.pages << CategoryPage.new(site, site.source, File.join(dir, author['slug'].gsub(/[^A-Za-z0-9]/, '-')), author['slug'])
        end
      end
    end
  end

end